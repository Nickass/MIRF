const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: 'server.tsx',
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'server.js',
  },  
  externals: nodeExternals({
    whitelist: [
      /\.(?!(?:jsx?|json)$).{1,5}$/i,
      /\.(?!(?:css?|scss)$).{1,5}$/i, // TODO: check with other files
    ],
  }),
  plugins: [
    new webpack.ExtendedAPIPlugin(), // This plug add __webpack_hash__ global variable
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: 'ignore-loader',
      },
      {
        test: /\.css$/,
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
  