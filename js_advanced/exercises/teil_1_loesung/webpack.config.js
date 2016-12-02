const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

const plugins = [
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: '../index.html'
  }),
];

module.exports = {
  devtool: 'eval',
  context: sourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: outputPath,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins,
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 3000,
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
      }
    },
  }
};
