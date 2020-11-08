const webpack = require('webpack');
const Path = require('path');
const { camelCase } = require('change-case');
const { dependencies = [] } = require('./config.json');


module.exports = ({ root, filePath }) => {
  const { dir: src, base: entryFile, name: fileName } = Path.parse(filePath);
  const entryDir = Path.join(root, src);
  const outputPath = Path.join(root, './dist/', src);
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const fullEntry = '~/' + entryFile;
  const entry = [fullEntry];
  const publicSrc = (src.replace('\\', '/') || 'ia') + '/';
  const publicPath = (isProduction ? '/' : `http://${process.env.COMPONENT_SERVER_HOST}:${process.env.COMPONENT_SERVER_PORT}/`) + publicSrc;
  
  const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), 
    new webpack.DefinePlugin({ 
      'ENTRYMODULE': JSON.stringify(fullEntry),
      'process.env': { 
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
        SERVER_HOST: JSON.stringify(process.env.SERVER_HOST),
      }
    }),
  ];
  
  if (isDevelopment) {
    entry.length = 0;
    entry.unshift(`webpack-hot-middleware/client?name=${publicSrc}&path=${process.env.COMPONENT_SERVER}/__webpack_hmr`);
    entry.push(Path.resolve(__dirname, 'Wrapper.js'))
  }

  return {
    name: publicSrc,
    entry,
    plugins,
    output: {
      path: outputPath,
      publicPath,
      filename: fileName + '.js',
      library: publicSrc,
      libraryTarget: 'umd',
      globalObject: 'globalThis',
    }, 
    externals: [
      dependencies.reduce((acc, curr) => ({ ...acc, [curr]: 'commonjs ' + curr }))
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
              babelrc: false,
              presets: [
                [
                  require.resolve('@babel/preset-env'),
                  { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
                ],
                require.resolve('@babel/preset-typescript'),
                require.resolve('@babel/preset-react'),
              ],
              plugins: [
                [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
                require.resolve('react-hot-loader/babel'),
              ],
            },
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
    }
  };
} 