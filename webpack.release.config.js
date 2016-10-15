var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './browse-page/index.js',
    output: {
        path: path.join(__dirname, 'static'),
        'publicPath': '/static/',
        'filename': 'bundle.js',
        'pathinfo': false
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            },
            {
                test: /.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' })
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)}
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                screw_ie8: true,
                if_return: true,
                join_vars: true
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};