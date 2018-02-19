/* eslint-disable import/no-extraneous-dependencies */

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  devtool: 'eval',
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 3001,
    compress: false,
    inline: true,
    hot: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};

const plugins = [new HtmlWebpackPlugin({ template: './index.html' })];

module.exports = require('./make-webpack-config')(options, plugins);
