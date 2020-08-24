#!/usr/bin/env node
const yargs = require('yargs');

const runDevServer = () => console.log('run dev server for component');
const runRootServer = () => {
  console.log('run root server');
  const rootServer = require('root');
  rootServer.run('localhost', 3000);
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