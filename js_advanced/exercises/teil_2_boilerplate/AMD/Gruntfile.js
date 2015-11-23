/*global module:false*/

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jscs: {
      app: {
        options: {
          config: 'jscs.json',
          fix: true
        },
        files: {
          src: ['*.js', 'src/*.js']
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
          src: ['*.js', 'src/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
};
