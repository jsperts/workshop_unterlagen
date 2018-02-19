/* eslint-disable import/no-extraneous-dependencies */

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/webpack-contrib/babel-minify-webpack-plugin
const MinifyPlugin = require('babel-minify-webpack-plugin');

const options = {
  devtool: 'source-map',
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
    },
  }),
  new MinifyPlugin(),
];

module.exports = require('./make-webpack-config')(options, plugins, true);
