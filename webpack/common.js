const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(), 
      new webpack.DefinePlugin({ 
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
      })
    ],
    context: path.join(process.cwd(), 'src'),
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : false,
    watch: isDevelopment,
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
      modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(process.cwd(), 'src')
      ]
    },
  };
  