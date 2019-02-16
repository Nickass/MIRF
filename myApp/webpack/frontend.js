var webpack = require('webpack');
var path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const forHMR = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
];
const forOld = ['babel-polyfill', './client.js'];

module.exports = {
    entry: isDevelopment ? [...forHMR, ...forOld] : forOld,
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
                loader : ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    output: {
        library: 'client',
        libraryTarget: 'umd',
        path: path.join(process.cwd(), isProduction ? 'build/static/' : 'dev/static/'),
        publicPath: isProduction ? '/static' : 'http://localhost:8080/static',
        filename: 'client.js'
    },
}