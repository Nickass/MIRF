var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

var externalsBackend = {};
if(isProduction) externalsBackend.client = 'commonjs ./static/client.js'

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        externalsBackend[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './server.js',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                options: {
                    plugins: ['transform-runtime'],
                    presets: ["react", "es2015"],
                }
            },
            {
                test: /\.css$/,
                loader : 'ignore-loader',
            },
        ]
    },
    output: {
        path: path.join(process.cwd(), isProduction ? 'build' : 'dev'),
        filename: 'server.js'
    },
    externals: externalsBackend,
    plugins: [
        new webpack.ExtendedAPIPlugin(), // This plug add __webpack_hash__ global variable
    ],
}