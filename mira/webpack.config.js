const webpack = require('webpack');
const _ = require('lodash');
const merge = require('webpack-merge');
const common = require('./webpack/common.js');
const backend = require('./webpack/backend.js');
const frontend = require('./webpack/frontend.js');


module.exports = [
  merge({} , common, backend),
  merge({} , common, frontend)
];