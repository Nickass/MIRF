const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
      require.resolve('webpack-dev-server/client') + '?/',
      require.resolve('webpack/hot/dev-server'),
      'react-hot-loader/patch',
      'index.tsx',
    ],
    output: {
      path: path.resolve(process.cwd(), 'public'),
      filename: 'bundle.js',
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
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(process.cwd(), 'public'),
      hot: true
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
      modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(process.cwd(), 'src')
      ]
    },
  };
  