const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function createConfig(sourcePath, distPath) {
  const clientSourcePath = path.join(__dirname, './client')

  const config = {
    context: sourcePath,
    devtool: 'source-map',
    entry: {
      js: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        './index.js',
      ],
      vendor: ['react'],
    },
    output: {
      path: distPath,
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader',
          query: {
            prefix: 'font/',
            limit: 5000,
          },
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../node_modules'),
        sourcePath,
        clientSourcePath,
      ],
    },
  }

  return config
}

module.exports = createConfig
