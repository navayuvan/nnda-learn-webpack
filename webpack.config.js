const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    plugins: [
        new CopyPlugin({
            patterns: [{
                    from: "public/js",
                    to: "js"
                },
                {
                    from: "public/css",
                    to: "css"
                },
                {
                    from: "public/fonts",
                    to: "fonts"
                }
            ],
        }),
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ],
    module: {
        rules: [{
            test: /\.ejs$/,
            loader: 'ejs-loader',
            options: {
                variable: 'data'
            }
        }]
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
    },
};