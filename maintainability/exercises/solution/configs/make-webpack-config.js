const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (isProd = false) {
  const sourcePath = path.join(__dirname, '../src');
  const outputPath = path.join(__dirname, '../dist');

  const plugins = [
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{ from: './images/', to: './images' }]),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ];

  const commonOptions = {
    context: sourcePath,
    entry: {
      js: './app/index.js',
    },
    output: {
      path: outputPath,
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: [
              ['es2015', { modules: false }],
            ],
          },
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
      modules: [
        path.resolve(__dirname, '../', 'node_modules'),
        sourcePath,
      ],
    },
    plugins,
  };

  const devOptions = {
    devtool: 'eval',
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
        },
      },
    },
  };

  const prodOptions = {
    devtool: 'source-map',
  };

  if (isProd) {
    return Object.assign({}, commonOptions, prodOptions);
  }
  return Object.assign({}, commonOptions, devOptions);
};
