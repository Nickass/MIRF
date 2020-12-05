const webpack = require('webpack');
const path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { camelCase } = require('change-case');
const CopyPlugin = require("copy-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./common.js');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const publicDir = path.join(__dirname, '../../dist/public');

const plugins = [
  // new webpack.NamedModulesPlugin(),
  // new SpriteLoaderPlugin(),
  new MiniCssExtractPlugin({ filename: 'client.css' }),
  new CopyPlugin({
    patterns: [
      { from: path.join(__dirname, '../../public'), to: publicDir },
    ],
  }),
];
const hmrEntry = [
  `webpack-dev-server/client?${process.env.HOT_SERVER}`,
  'webpack/hot/dev-server'
];
const entry = [
  require.resolve('@babel/polyfill'),
  '~/client.tsx',
];

if (isDevelopment) {
  entry.unshift(...hmrEntry);
  plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

const publicPath = isProduction ? '/' : process.env.HOT_SERVER;

module.exports = merge(common, {
  entry,
  output: {
    path: publicDir,
    publicPath,
    filename: `client.js`
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'errors-only',
    historyApiFallback: true,
    port: process.env.HOT_SERVER_PORT,
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: process.env.HOT_SERVER,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }]
      },
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          },
        },
      },
      // {
      //   test: /[\\\/]ic-.*?\.(png|svg|gif|jpe?g)$/i,
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         esModule: false,
      //         extract: true,
      //         spriteFilename: 'sprite.svg',
      //       }
      //     }
      //   ]
      // },
      {
        test: /[\\\/]ic-.*?\.(png|gif|jpe?g)$/i,
        use: [
          'image2svg-loader'
        ]
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        exclude: /[\\\/]ic-.*\.(png|svg|gif|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      }
    ]
  },
});