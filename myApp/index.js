const nodemon = require('nodemon');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const common = require('./webpack/common.js');
const backend = require('./webpack/backend.js');
const frontend = require('./webpack/frontend.js');
const _ = require('lodash');


const backConf = _.merge({}, common, backend);
const frontConf = _.merge({}, common, frontend);

let webpackFunc = (err, stats) => {
    if(err) console.log(err)
    else console.log(stats.toString({
        time: true,
        colors: true
    }));
}


if(process.env.NODE_ENV === 'development') {
    nodemon({ script: './dev/server.js' });

    webpack(backConf, webpackFunc);
    new WebpackDevServer(webpack(frontConf), {
        headers: { 'Access-Control-Allow-Origin': '*' },
        hot: true,
        inline: true,
        stats: { colors: true },
        historyApiFallback: true,
        publicPath: 'http://localhost:8080/static',
    }, webpackFunc).listen(8080, 'localhost');
} else {
    webpack([backConf, frontConf], webpackFunc);
}