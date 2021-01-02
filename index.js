#!/usr/bin/env node

const yargs = require('yargs');
const webpack = require('webpack');
const { join: joinPath, relative: relativePath, parse: parsePath } = require('path');
const glob = require("glob");
const cors = require('cors');
const glob2base = require('glob2base');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const componentConfig = require('./webpack/component');
const { default: rootServer } = require('./dist/server.js');
const packageJson = require('./package.json');

const makeConfigs = ({ cwd, entry, output, host, port }) => {
  const globInstance = new glob.Glob(entry);
  const baseGlob = glob2base(globInstance);
  const files = glob.sync(entry, { cwd });

  return files.map(filePath => {
    const relPath = relativePath(baseGlob, filePath);
    const { dir: src, name: fileName } = parsePath(relPath);
    const entryDir = joinPath(cwd, baseGlob, src);
    const outputPath = joinPath(cwd, output, src);
    const publicSrc = src.replace(/\\/gm, '/').replace(/\/$/gm, '') + '/';
    const publicBase = `http://${host}:${port}`;
    const publicPath = `${publicSrc}`;
    const bundleName = joinPath(src, fileName).replace(/[\\\/]/gm, '-');

    return componentConfig({
      entryDir,
      outputPath,
      publicBase,
      publicPath,
      bundleName,
      fileName,
    });
  })
};

const devCommand = yargs => yargs
  .command({
    command: "*",
    desc: "Start developing",
    handler: argv => {
      const { cwd, port, host, share, rootComponent } = argv;
      const configs = makeConfigs(argv);
      const frontCompiler = webpack(configs);
      const sharedPaths = share.split(',').filter(item => item).map(item => joinPath(cwd, item));
      const app = express();

      app.use(cors())
      app.use(webpackDevMiddleware(frontCompiler));
      app.use(webpackHotMiddleware(frontCompiler));
      app.use(rootServer(rootComponent, sharedPaths));

      app.listen(port, host, () => console.log('Server is runing!'));
    }
  });

const buildCommand = yargs => yargs
  .command({
    command: "*",
    desc: "Building components for the app",
    handler: argv => {
      const configs = makeConfigs(argv);
      const frontCompiler = webpack(configs);

      frontCompiler.run((err, stats) => {
        if(err) throw err;
        else console.log(stats.toString({
          time: true,
          colors: true
        }));
      });
    }
  });

const serveCommand = yargs => yargs
  .command({
    command: "*",
    desc: "Start server",
    handler: argv => {
      const { cwd, host, port, share, rootComponent } = argv;
      const sharedPaths = share.split(',').filter(item => item).map(item => joinPath(cwd, item));

      rootServer(rootComponent, sharedPaths).listen(port, host, () => console.log('Server is runing!'));
    }
  });

yargs
.scriptName(packageJson.name)
.options({
  cwd: {
    describe: 'The cwd of the process',
    default: process.cwd()
  },
  host: {
    alias: 'h',
    describe: 'Host of the server',
    default: 'localhost'
  },
  port: {
    alias: 'p',
    describe: 'Port of the server',
    default: '3000'
  },
  entry: {
    alias: 'e',
    describe: 'A glob of the components',
    default: 'index.{tsx,js,jsx}'
  },
  output: {
    alias: 'o',
    describe: 'The path to place bundled modules',
    default: 'dist/'
  },
  rootComponent: {
    alias: 'rc',
    describe: 'URI to the root component',
    default: 'http://localhost:3000/index.js'
  },
  share: {
    alias: 'sh',
    describe: 'Define a coma-separated list of directories to host files',
    default: 'dist/',
  }
})
.command({
  command: "*",
  builder: devCommand
})
.command({
  command: "build",
  builder: buildCommand
})
.command({
  command: "start",
  builder: serveCommand
})

yargs.wrap(yargs.terminalWidth());
yargs.argv;
