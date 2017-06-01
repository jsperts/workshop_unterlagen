const path = require('path');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: {
    js: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
    modules: [
      sourcePath,
    ],
  },
  target: 'node',
};

