/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function () {
  "use strict";

  System.config({
    paths: {
      // paths serve as alias
      'npm:': '../../../node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs/index.js',
      'rxjs/internal': 'npm:rxjs/internal',
      'rxjs/operators': 'npm:rxjs/operators',

      main: 'dist/main.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      rxjs: {
        defaultExtension: 'js'
      },
      'rxjs/internal': {
        defaultExtension: 'js'
      },
      'rxjs/operators': {
        main: 'index',
        defaultExtension: 'js'
      },
      'dist/app': {
        main: 'index',
        defaultExtension: 'js'
      },
      'dist/app/products': {
        main: 'index',
        defaultExtension: 'js'
      },
      'dist/app/admin': {
        main: 'index',
        defaultExtension: 'js'
      }
    }
  });
})();
