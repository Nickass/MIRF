#!/usr/bin/env node
require('../env');
process.env.NODE_ENV = 'development'
const Path = require('path');
const yargs = require('yargs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const componentConfig = require('./component');
const liveServer = require("live-server");
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const glob = require("glob");
const cors = require('cors');

let webpackFunc = (err, stats) => {
  if(err) console.log(err)
  else console.log(stats.toString({
    time: true,
    colors: true
  }));
}

const runDevServer = async () => {
  const app = express();
  const root = process.cwd();
  const files = glob.sync('{**/pages/*/,*}index.{tsx,js,jsx}', { root });
  const configs = files.map(filePath => componentConfig({ root, filePath }));
  const frontCompiler = webpack(configs);
  
  app.use(cors())
  app.use(webpackDevMiddleware(frontCompiler));
  app.use(webpackHotMiddleware(frontCompiler))
  
  app.listen(process.env.COMPONENT_SERVER_PORT);
};
const runRootServer = () => {
  const rootServer = require('root');
  rootServer.listen(process.env.SERVER_PORT, () => console.log('Server is runing!'));
};


yargs
.completion()
.command({
  command: "root-server",
  desc: "Run root server",
  handler: runRootServer
})
.command({
  command: 'dev-component',
  desc: 'Run dev server for component',
  handler: runDevServer
})
.command({
  command: "dev",
  desc: "Component creator",
  handler: () => {
    runRootServer();
    runDevServer();
  }
});

yargs.wrap(yargs.terminalWidth());
yargs.showHelp();