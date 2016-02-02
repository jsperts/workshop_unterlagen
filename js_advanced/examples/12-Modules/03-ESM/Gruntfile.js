(function() {
  'use strict';
  /*global module:false*/

  const path = require('path');

  module.exports = function(grunt) {
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
            cwd: 'src',
            src: '*.js',
            dest: 'dist/'
          }]
        }
      }
    });

    grunt.loadTasks(path.resolve('../../node_modules/grunt-babel/tasks'));

    // Default task.
    grunt.registerTask('default', ['babel']);
  };
})();
