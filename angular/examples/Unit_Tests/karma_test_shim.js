// https://github.com/angular/quickstart/blob/master/karma-test-shim.js
// #docregion
Error.stackTraceLimit = 0; // "No stacktrace"" is usually best for app testing.

// Uncomment to get full stacktrace output. Sometimes helpful, usually not.
// Error.stackTraceLimit = Infinity; //

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

var builtPath = '/base/dist/';

__karma__.loaded = function () { };

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.(.*\.)?js$/.test(path);
}

function isBuiltFile(path) {
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isBuiltFile);

System.config({
  baseURL: '/base',

  // Assume npm: is set in `paths` in systemjs.config
  // Map the angular testing umd bundles
  map: {
    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/common/http/testing': 'npm:@angular/common/bundles/common-http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
    '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
  },
});

System.import('system-config.js')
    .then(initTestBed)
    .then(initTesting);

function initTestBed(){
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])

      .then(function (providers) {
        var coreTesting    = providers[0];
        var browserTesting = providers[1];

        coreTesting.TestBed.initTestEnvironment(
            browserTesting.BrowserDynamicTestingModule,
            browserTesting.platformBrowserDynamicTesting());
      })
}

// Import all spec files and start karma
function initTesting () {
  return Promise.all(
      allSpecFiles.map(function (moduleName) {
        return System.import(moduleName)
            .catch((e) => {});
      })
  )
      .then(__karma__.start, __karma__.error);
}
