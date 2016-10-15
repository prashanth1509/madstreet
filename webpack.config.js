var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
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
                        loader: 'css-loader',
                        query: {
                            module: true,
                            localIdentName: "[path][name]_[local]_[hash:base64:6]"
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'image-size'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                devServer: {
                    inline: true
                }
            }
        })
    ]
};