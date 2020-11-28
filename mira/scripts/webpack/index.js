require('../../../env.js');

const fs = require('fs-extra');
const path = require('path');
const nodemon = require('nodemon');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const [backConf, frontConf] = require('./webpack.config');

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
    stats: { colors: true },
    stats: 'errors-only',
    historyApiFallback: true,
    publicPath: process.env.HOT_SERVER,
  }).listen(process.env.HOT_SERVER_PORT, process.env.HOT_SERVER_HOST);
  
  webpack(backConf, webpackFunc);
  nodemon({
    script: path.join(__dirname, '../../dist/server.js'),
    args: [process.env.SERVER_PORT, process.env.ROOT_COMPONENT]
  }).on('error', console.log.bind(console));
} else {
  webpack(frontConf, async (err, stats) => {
    if (err) throw err;
    const jsfile = await fs.readFile(path.join(__dirname, '../../dist/client.js')); // TODO: resolve this hack
    const cssfile = await fs.readFile(path.join(__dirname, '../../dist/client.css'));

    backConf.plugins.push(
      new webpack.DefinePlugin({ 
        CLIENT_JS_FILE_CONTENTS: JSON.stringify(jsfile.toString()),
        CLIENT_CSS_FILE_CONTENTS: JSON.stringify(cssfile.toString()),
      })
    );
    webpack(backConf, webpackFunc);
  });
}