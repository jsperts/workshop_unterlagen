module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      'app/**/*.spec.js',
      'app/app.module.js',
      'app/**/*.html'
    ],
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'/*, 'Chrome'*/],
    singleRun: true,
    preprocessors: {
      'app/**/*.spec.js': ['webpack', 'sourcemap'],
      'app/app.module.js': ['webpack', 'sourcemap'],
      'app/**/*.html': 'ng-html2js'
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};

