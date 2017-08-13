'use strict';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackCommon = {
    entry: {
        app: [path.join(__dirname, 'src/scripts/app.js')]
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tpl$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/assets/js'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: 'src/html', to: path.join(__dirname, 'public')
        }])
    ],
    resolve: {
        root: path.join(__dirname, './src')
    },
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    }
};

switch (process.env.npm_lifecycle_event) {
  case 'start':
  case 'dev':
    module.exports = merge(webpackCommon, {
      devtool: '#inline-source-map'
    });
    break;
  default:
    module.exports = merge(webpackCommon, {
      devtool: 'source-map'
    });
    break;
}
