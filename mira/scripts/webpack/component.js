const webpack = require('webpack');
const Path = require('path');
const { camelCase } = require('change-case');
const { dependencies = [] } = require('../../config.json');


module.exports = params => {
  const { entryDir, outputPath, publicBase, publicPath, bundleName, fileName } = params;
  const isDevelopment = process.env.NODE_ENV === 'development';
  const fullEntry = '~/' + fileName;
  const entry = [fullEntry];
  
  const plugins = [
    new webpack.DefinePlugin({ 
      'ENTRYMODULE': JSON.stringify(fullEntry),
      'process.env': { 
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ];
  
  if (isDevelopment) {
    plugins.unshift(new webpack.HotModuleReplacementPlugin());
    plugins.unshift(new webpack.NoEmitOnErrorsPlugin());
    entry.length = 0;
    entry.unshift(`${require.resolve('webpack-hot-middleware/client')}?name=${bundleName}&path=${publicBase}/__webpack_hmr`);
  }
  entry.push(Path.resolve(__dirname, 'Wrapper.js'))

  return {
    name: bundleName,
    entry,
    plugins,
    output: {
      path: outputPath,
      publicPath,
      filename: fileName + '.js',
      library: bundleName,
      libraryTarget: 'umd',
      globalObject: 'globalThis',
    },
    externals: [
      /^\#external\//,
      dependencies.reduce((acc, curr) => ({ ...acc, [curr]: 'commonjs ' + curr }), {})
    ],
    node: {
      __dirname: false,
      __filename: false,
    },
    mode: process.env.NODE_ENV,
    context: entryDir,
    watch: isDevelopment,
    devtool: isDevelopment ? "inline-cheap-module-source-map" : undefined,
    resolve: {
      modules: [Path.resolve(__dirname, 'node_modules'), 'node_modules'],
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
      alias: {
        '~': entryDir,
        'ENTRYMODULE': fullEntry
      }
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"]
          },
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              cacheDirectory: true,
              extends: require.resolve("../../.babelrc"),
            },
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: require.resolve('ignore-loader'),
        },
        {
          test: /\.css$/,
          use: require.resolve('ignore-loader'),
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: require.resolve('ignore-loader')
        },
        {
          test: /\.mp4$/,
          use: require.resolve('ignore-loader'),
        },
        {
          test: /\.(png|svg|gif|jpe?g)$/i,
          exclude: /[\\\/]ic-.*\.(png|svg|gif|jpe?g)$/i,
          use: require.resolve('ignore-loader'),
        }
      ]
    }
  };
} 