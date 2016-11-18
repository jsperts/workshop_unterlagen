module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    files: [
      'dist/**/*.spec.js'
    ],
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    systemjs: {
      serveFiles: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-messages/angular-messages.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'dist/**/*.js'
      ],
      config: {
        defaultJSExtensions: true,
        map: {
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'angular': 'node_modules/angular/angular.js',
          'angular-route': 'node_modules/angular-route/angular-route.js',
          'angular-messages': 'node_modules/angular-messages/angular-messages.js',
          'angular-mocks': 'node_modules/angular-mocks/angular-mocks.js'
        },
        meta: {
          'angular': {
            format: 'global',
            exports: 'angular'
          },
          'angular-route': {
            format: 'global',
            deps: ['angular']
          },
          'angular-messages': {
            format: 'global',
            deps: ['angular']
          },
          'angular-mocks': {
            format: 'global',
            exports: 'angular',
            deps: ['angular']
          }
        },
        transpiler: null,
      }
    }
  });
};
