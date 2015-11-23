(function() {
  'use strict';
  /*global module:false*/

  module.exports = function(grunt) {
    grunt.initConfig({
      babel: {  // Transpiler fuer ES6 Module
        options: {
          sourceMap: true,
          modules: 'amd'
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

    grunt.loadNpmTasks('grunt-babel');

    // Default task.
    grunt.registerTask('default', ['babel']);
  };
})();
