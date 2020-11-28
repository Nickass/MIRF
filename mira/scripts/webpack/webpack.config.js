const merge = require('webpack-merge');
const common = require('./common.js');
const backend = require('./backend.js');
const frontend = require('./frontend.js');


module.exports = [
  merge({} , common, backend),
  merge({} , common, frontend)
];