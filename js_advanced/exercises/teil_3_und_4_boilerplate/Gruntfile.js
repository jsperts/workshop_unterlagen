/*global module:false*/
/*global require:false*/

module.exports = function(grunt) {
  'use strict';

  var loadGruntTasksConfig = {
    requireResolution: true
  };
  require('load-grunt-tasks')(grunt, loadGruntTasksConfig);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-amd']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: './**/*.js',
          dest: 'build/'
        }]
      }
    },
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
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
          debounceDelay: 1000
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
  grunt.registerTask('build-dev', ['babel']);
  grunt.registerTask('build-watch', ['watch']);
};
