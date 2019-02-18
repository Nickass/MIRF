const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName: (filename, bindingName) => {console.log(filename, bindingName); return getFilename(filename) + "_" + bindingName}
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
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }), // TODO: force it working
        }
      },
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
  