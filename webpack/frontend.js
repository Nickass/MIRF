const webpack = require('webpack');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const hmrEntry = [
  `webpack-dev-server/client?http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}`,
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch',
];
const entry = [
  'client.tsx',
];

if (isDevelopment) {
  entry.unshift(...hmrEntry);
}

module.exports = {
  entry,
  output: {
    path: path.join(process.cwd(), 'build/public/'),
    publicPath: isProduction ? '/public' : `http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}/public`,
    filename: 'client.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), 'public'),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new SpriteLoaderPlugin(),
  ],
  module: {
    rules: [
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
};