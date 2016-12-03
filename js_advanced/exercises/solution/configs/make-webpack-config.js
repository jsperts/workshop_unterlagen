const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (isProd = false) {
  const sourcePath = path.join(__dirname, '../src');
  const outputPath = path.join(__dirname, '../dist');

  const plugins = [
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{from: './images/', to: './images'}]),
    new ExtractTextPlugin('styles.css'),
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        },
      })
    );
  } else {
    plugins.push(new HtmlWebpackPlugin({ template: './index.html' }))
  }

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
          use: [
            'babel-loader'
          ],
          query: {
            extends: '../configs/.babelrc'
          }
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader',
          }),
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
      modules: [
        path.resolve(__dirname, '../', 'node_modules'),
        sourcePath
      ]
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
        }
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
