'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
  app: './app/app.module.js',
  vendor: ['angular', 'angular-route', 'angular-messages']
};

const modules = {
  loaders: [
    {
      test: /\.js/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime', 'transform-inline-environment-variables']
      }
    }
  ]
};

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'head'
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
];

const webpackConfig = {
  options: {
    entry,
    devtool: 'source-map',
    plugins: commonPlugins,
    module: modules,
    output: {
      path: './dist',
      filename: 'app.js'
    }
  },
  dev: {},
  prod: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin()
    ]
  }
};

module.exports = webpackConfig;
