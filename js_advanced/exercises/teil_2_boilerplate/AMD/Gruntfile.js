/*global module:false*/
/*global require:false*/

module.exports = function(grunt) {
  'use strict';

  var loadGruntTasksConfig = {
    requireResolution: true
  };
  require('load-grunt-tasks')(grunt, loadGruntTasksConfig);

  grunt.initConfig({
    jscs: {
      app: {
        options: {
          config: 'jscs.json',
          fix: true
        },
        files: {
          src: ['./**/*.js', '!./build/*', '!./dist/*']
        }
      }
    },
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        esnext: true, // es6 features
        forin: true,
        freeze: true,
        latedef: 'nofunc',
        noarg: true,
        nonew: true,
        singleGroups: true,
        strict: false, // es6 modules are strict by default
        undef: true,
        unused: true,
        browser: true,
        globals: {
          require: true
        }
      },
      app: {
        files: {
          src: ['./**/*.js', '!./build/*', '!./dist/*']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
};
