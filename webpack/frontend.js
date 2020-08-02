const webpack = require('webpack');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { StatsWriterPlugin } = require("webpack-stats-plugin")

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';


const plugins = [
  new StatsWriterPlugin({
    stats: {
      all: false,
      chunkGroups: true,
    },
    filename: "stats.json" // Default
  }),
  new webpack.NamedModulesPlugin(),
  new SpriteLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[name].[contenthash].css',
  }),
];
const hmrEntry = [
  `webpack-dev-server/client?http://${process.env.STATIC_SERVER_HOST}:${process.env.STATIC_SERVER_PORT}`,
  'webpack/hot/dev-server'
];
const entry = [
  '~/client.tsx',
];

if (isDevelopment) {
  entry.unshift(...hmrEntry);
  plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  entry,
  output: {
    path: path.join(process.cwd(), 'dist/public/'),
    publicPath: isProduction ? '/' : `http://${process.env.STATIC_SERVER_HOST}:${process.env.STATIC_SERVER_PORT}/public/`,
    filename: `[name]${isDevelopment ? '' : '-[contenthash]'}.js`
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: isDevelopment }
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
      {
        test: /[\\\/]ic-.*?\.(png|svg|gif|jpe?g)$/i,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              esModule: false,
              extract: true,
              spriteFilename: 'sprite.svg',
            }
          }
        ]
      },
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