var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './browse-page/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            },
            {
                test: /.css$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        query: {
                            singleton: true
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
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
        new webpack.NoErrorsPlugin(),
        new CompressionPlugin({
            asset: '[path][query]',
            algorithm: 'gzip',
            test: /\.js$|\.svg|\.css/
        })
    ]
};