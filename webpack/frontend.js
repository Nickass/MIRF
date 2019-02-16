const webpack = require('webpack');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';


// with babel
// const forHMR = [
//   'webpack-dev-server/client?http://localhost:8080',
//   'webpack/hot/only-dev-server'
// ];
// const forOld = ['babel-polyfill', './client.js'];
// const entry = isDevelopment ? [...forHMR, ...forOld] : forOld

// with Typescript
const forHMR = [
  require.resolve('webpack-dev-server/client') + '?/',
  require.resolve('webpack/hot/dev-server'),
  'react-hot-loader/patch',
  'client.tsx',
];
const entry = forHMR;
const HOST = 'localhost';
const PORT = 9000;


module.exports = {
  entry,
  output: {
    library: 'client',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), isProduction ? 'build/static/' : 'dev/static/'),
    publicPath: isProduction ? '/static' : `http://${HOST}:${PORT}/static`,
    filename: 'client.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), 'public'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new SpriteLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'src')
    ]
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
};