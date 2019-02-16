var webpack = require('webpack');
var _ = require('lodash');
var common = require('./webpack/common.js');
var backend = require('./webpack/backend.js');
var frontend = require('./webpack/frontend.js');


module.exports = [
    Object.assign({} , common, backend),
    Object.assign({} , common, frontend)
];