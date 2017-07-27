"use strict";

var path = require('path');
const cwd = process.cwd();

module.exports = {
  entry: path.join(cwd, './src/index.js'),
  devtool: 'eval-source-map',
  output: {
    path: path.join(cwd, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules\/)/,
        loader: 'babel-loader',
      },
    ],
  },
};
