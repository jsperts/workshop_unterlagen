'use strict';

const karmaConfig = {
  unit: {
    options: {
      files: [
        'app/**/*.spec.js',
        'app/app.module.js',
        '../node_modules/angular-mocks/angular-mocks.js'
      ]
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],
    preprocessors: {
      'app/**/*.spec.js': ['webpack', 'sourcemap'],
      'app/app.module.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015'],
              plugins: ['transform-runtime', 'transform-inline-environment-variables']
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  },
  integration: {
    options: {
      files: [
        'tests/integration/**/*.spec.js',
        'app/app.module.js',
        '../node_modules/angular-mocks/angular-mocks.js'
      ]
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],
    preprocessors: {
      'tests/integration/**/*.spec.js': ['webpack', 'sourcemap'],
      'app/app.module.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015'],
              plugins: ['transform-runtime', 'transform-inline-environment-variables']
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  }
};

module.exports = karmaConfig;
