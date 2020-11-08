const webpack = require('webpack');
const path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { camelCase } = require('change-case');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const plugins = [
  // new webpack.NamedModulesPlugin(),
  // new SpriteLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
  }),
];
const hmrEntry = [
  `webpack-dev-server/client?${process.env.HOT_SERVER}`,
  'webpack/hot/dev-server'
];
const entry = [
  '~/client.tsx',
];

if (isDevelopment) {
  entry.unshift(...hmrEntry);
  plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

const publicPath = isProduction ? '/' : process.env.HOT_SERVER;

module.exports = {
  entry,
  output: {
    path: path.join(process.cwd(), 'dist/'),
    publicPath,
    filename: `client.js`
    // filename: `client${isDevelopment ? '' : '-[contenthash]'}.js`
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), '/public/'),
    hot: isDevelopment
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : { // TODO: make hmr client-server friendly
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer({
                  browsers: [
                    'last 2 versions',
                    'not ie <= 11',
                    'not ie_mob <= 11',
                  ],
                }),
              ],
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
};