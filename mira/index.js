require('../env.js');

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

let webpackFunc = (err, stats) => {
  if(err) console.log(err)
  else console.log(stats.toString({
    time: true,
    colors: true
  }));
}

if (process.env.NODE_ENV === 'development') {
  new WebpackDevServer(webpack(frontConf), {
    port: process.env.HOT_SERVER_PORT, // work for windows
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    inline: true,
    // stats: { colors: true },
    stats: 'errors-only',
    historyApiFallback: true,
    publicPath: process.env.HOT_SERVER,
  }).listen(process.env.HOT_SERVER_PORT, process.env.HOT_SERVER_HOST);
  
  webpack(backConf, webpackFunc);
  nodemon({ script: path.join(__dirname, './dist/server.js') }).on('error', console.log.bind(console));
} else {
  webpack(frontConf, async () => {
    const file = await fs.readFile(path.join(__dirname, './dist/client.js'));
    backConf.plugins.push(
      new webpack.DefinePlugin({ 
        CLIENT_JS_FILE_CONTENTS: JSON.stringify(file.toString()),
      })
    );
    webpack(backConf, webpackFunc);
  });
}