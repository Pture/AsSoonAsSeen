const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    target: 'web',
    output: {
        path: __dirname,
        filename: './public/js/index.js',
        libraryTarget: 'var',
        publicPath: __dirname
    },
    devServer: {
        inline: true,
        contentBase: "./public" ,
        port: 4000

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/i
            }
        ]
    }
};
