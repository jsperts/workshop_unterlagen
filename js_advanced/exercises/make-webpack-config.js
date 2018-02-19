/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const webpack = require('webpack');

// https://github.com/ai/browserslist
const browserslist = 'last 2 versions';

module.exports = function createConfig(options, plugins, isProd = false) {
  const sourcePath = path.join(__dirname, './src');
  const outputPath = path.join(__dirname, './dist');

  const babelConfig = {
    plugins: [
      // https://babeljs.io/docs/plugins/transform-runtime/
      [
        'transform-runtime',
        {
          polyfill: false,
        },
      ],
    ],
    presets: [
      // https://github.com/babel/babel-preset-env
      [
        'env',
        {
          targets: { browsers: browserslist },
          modules: false,
          useBuiltIns: true,
          debug: !isProd,
        },
      ],
      // https://babeljs.io/docs/plugins/preset-stage-3/
      'stage-3',
    ],
  };

  const commonPlugins = [
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env.isDev': JSON.stringify(!isProd),
    }),
  ];

  const commonOptions = {
    context: sourcePath,
    entry: {
      js: './index.js',
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
          options: babelConfig,
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
      modules: ['node_modules', sourcePath],
    },
    plugins: [...commonPlugins, ...plugins],
  };

  return Object.assign({}, commonOptions, options);
};
