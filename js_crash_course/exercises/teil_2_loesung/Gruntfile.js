/*global module:false*/

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jscs: {
      app: {
        options: {
          config: 'jscs.json'
        },
        files: {
          src: ['*.js', 'Gruntfile.js']
        }
      }
    },
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: 'nofunc',
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: 'single',
        regexp: true,
        singleGroups: true,
        strict: true,
        undef: true,
        unused: true,
        browser: true
      },
      app: {
        files: {
          src: ['*.js', 'Gruntfile.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
};
