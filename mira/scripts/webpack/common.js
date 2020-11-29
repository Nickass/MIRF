const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const { dependencies = [] } = require('../../config.json');
const { camelCase } = require('change-case');

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), 
    new webpack.DefinePlugin({ 
      'process.env': { 
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HOT_SERVER_PORT: JSON.stringify(process.env.HOT_SERVER_PORT),
        HOT_SERVER_HOST: JSON.stringify(process.env.HOT_SERVER_HOST),
        HOT_SERVER: JSON.stringify(process.env.HOT_SERVER),
      }
    }),
    // new BundleAnalyzerPlugin()
  ],
  context: path.join(process.cwd(), 'src'),
  devtool: isDevelopment ? "inline-cheap-module-source-map" : undefined,
  watch: isDevelopment,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
    alias: {
      '~': path.resolve(__dirname, '../../src/'),
    }
  },
  module: {
    rules: [
      {
        test: /ExternalModule[\/\\](client|server)\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'imports-loader',
          options: {
            imports: dependencies.map(name => ({
              syntax: 'namespace',
              moduleName: name,
              name: camelCase(name),
            })),
            additionalCode: `var PROVIDED_MODULES = { ${dependencies.map(name => `'${name}': ${camelCase(name)}` )} };\n`,
          },
        }],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".tsx", ".ts", ".js", ".jsx"]
        },
        use: [
          'ts-loader'
        ],
      },
    ]
  }
};
  