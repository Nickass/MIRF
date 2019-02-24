require('./env.js');

const fs = require('fs-extra');
const path = require('path');
const nodemon = require('nodemon');
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const common = require('./webpack/common.js');
const backend = require('./webpack/backend.js');
const frontend = require('./webpack/frontend.js');

const backConf = merge({}, common, backend);
const frontConf = merge({}, common, frontend);

// console.log(frontConf.module.rules); process.exit();

let webpackFunc = (err, stats) => {
  if(err) console.log(err)
  // else console.log(stats.toString({
  //     time: true,
  //     colors: true
  // }));
}


if(process.env.NODE_ENV === 'development') {
  nodemon({ script: './build/server.js' });
  
  webpack(backConf, webpackFunc);
  new WebpackDevServer(webpack(frontConf), {
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    inline: true,
    // stats: { colors: true },
    stats: 'errors-only',
    historyApiFallback: true,
    publicPath: `http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}/public`,
  }).listen(process.env.HMR_SERVER_PORT, process.env.HMR_SERVER_HOST);
} else {
  fs.copy(path.join(process.cwd(), './public'), path.join(process.cwd(), './build/public'));
  webpack([backConf, frontConf], webpackFunc);
}