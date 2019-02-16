var webpack = require('webpack');
var path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';


module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.*'],
        modules: [path.join(process.cwd(), 'node_modules'), path.join(process.cwd(), 'src/')],
    },
    context: path.join(process.cwd(), 'src'),
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), 
        new webpack.DefinePlugin({ 
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ],
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : false,
    watch: isDevelopment,
}