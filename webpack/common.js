const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), 
    new webpack.DefinePlugin({ 
      'process.env': { 
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HMR_SERVER_PORT: JSON.stringify(process.env.HMR_SERVER_PORT),
        HMR_SERVER_HOST: JSON.stringify(process.env.HMR_SERVER_HOST),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
        SERVER_HOST: JSON.stringify(process.env.SERVER_HOST),
      }
    }),
    // new BundleAnalyzerPlugin()
  ],
  context: path.join(process.cwd(), 'src'),
  devtool: isDevelopment ? 'cheap-module-inline-source-map' : undefined,
  watch: isDevelopment,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
    alias: {
      '~': path.resolve(__dirname, '../src/'),
      '~~': path.resolve(__dirname, '../'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
  