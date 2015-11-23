/*global module:false*/

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        modules: 'amd'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '*.js',
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
          src: ['src/*.js']
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
          src: ['src/*.js']
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

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
  grunt.registerTask('build', ['babel']);
  grunt.registerTask('build-watch', ['watch']);
};
