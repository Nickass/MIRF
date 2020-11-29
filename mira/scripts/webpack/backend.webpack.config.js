const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const common = require('./common.js');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: [require.resolve('@babel/polyfill'), '~/server.tsx'],
  output: {
    path: path.join(__dirname, '../../dist/'),
    filename: 'server.js',
    library: 'mira',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
  externals: nodeExternals({
    whitelist: [
      /\.(?!(?:jsx?|json)$).{1,5}$/i,
      /\.(?!(?:css?|scss)$).{1,5}$/i, // TODO: check with other files
    ],
  }),
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
});
  