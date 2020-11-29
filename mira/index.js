#!/usr/bin/env node

const yargs = require('yargs');
const webpack = require('webpack');
const { parse: parsePath } = require('path');
const glob = require("glob");
const cors = require('cors');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const componentConfig = require('./scripts/webpack/component');
const { default: rootServer } = require('./dist/server.js');

let webpackFunc = (err, stats) => {
  if(err) console.log(err)
  else console.log(stats.toString({
    time: true,
    colors: true
  }));
}

yargs
.completion()
.options({
  entry: {
    alias: 'e',
    describe: 'A glob the components',
    default: 'index.{tsx,js,jsx}'
  },
  serverHost: {
    alias: 'sh',
    describe: 'Host of the server',
    default: 'localhost'
  },
  serverPort: {
    alias: 'sp',
    describe: 'Port of the server',
    default: '3000'
  },
  componentHost: {
    alias: 'ch',
    describe: 'The host of the components',
    default: 'localhost'
  },
  componentPort: {
    alias: 'cp',
    describe: 'The port of the components',
    default: '8080'
  },
  root: {
    describe: 'The cwd of the process',
    default: process.cwd()
  },
  serverless: {
    describe: 'Detect whether start root server',
    default: false,
    type: 'boolean'
  },
})
.command({
  command: "dev",
  desc: "Component creator",
  handler: argv => {
    const { serverless, root, entry, serverPort, serverHost, componentHost, componentPort } = argv;
    const app = express();
    const files = glob.sync(entry, { root });
    const { name } = parsePath(files[0]);
    const rootComponent = `http://${componentHost}:${componentPort}/${name}.js`

    const configs = files.map(filePath => componentConfig({
      root,
      filePath,
      componentHost,
      componentPort
    }));
    const frontCompiler = webpack(configs);
    
    app.use(cors())
    app.use(webpackDevMiddleware(frontCompiler));
    app.use(webpackHotMiddleware(frontCompiler))
    app.listen(componentPort);
  
    if (!serverless) {
      rootServer(rootComponent).listen(serverPort, serverHost, () => console.log('Server is runing!'));
    }
  }
});

yargs.wrap(yargs.terminalWidth());
yargs.showHelp();