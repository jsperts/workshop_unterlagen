'use strict';

const path = require('path');
const cwd = process.cwd();

module.exports = {
  entry: path.join(cwd, './app/app.module.js'),
  devtool: 'source-map',
  output: {
    path: path.join(cwd, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: path.join(cwd, 'app'),
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};
