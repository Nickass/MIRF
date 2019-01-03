const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.config.js');

const PORT = 9000;
const HOST = 'localhost';

const compiler = webpack(config);

const serverConfig = {
  hot: true,
  // contentBase: 'public',
  // compress: true,
  host: HOST,
  port: PORT
}

const devServer = new WebpackDevServer(compiler, serverConfig);

// Run webpack development server
devServer.listen(PORT, HOST, (err) => {
	if (err)
		return console.log(err);
});