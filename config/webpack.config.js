const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      'react-dev-utils/webpackHotDevClient',
      'src/index.js',
    ],
    output: {
      path: process.cwd() + '/public',
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.DefinePlugin({NODE_ENV: 'development'}),
      new SpriteLoaderPlugin()
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
  };
  