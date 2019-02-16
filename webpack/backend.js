const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

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
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: [
    'server.tsx',
  ],
  output: {
    path: path.join(process.cwd(), isProduction ? 'build' : 'dev'),
    filename: 'server.js',
  },  
  externals: externalsBackend,
  plugins: [
    new webpack.ExtendedAPIPlugin(), // This plug add __webpack_hash__ global variable
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: 'ignore-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'ignore-loader'
      },
      {
        test: /\.mp4$/,
        use: 'ignore-loader',
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        exclude: /[\\\/]ic-.*\.(png|svg|gif|jpe?g)$/i,
        use: 'ignore-loader',
      }
    ]
  },
};
  