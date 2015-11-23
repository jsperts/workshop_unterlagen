/*global module:false*/

module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  var configs = require('./grunt_configs');

  grunt.initConfig({
    babel: configs.babel,
    clean: configs.clean,
    copy: configs.copy,
    cssmin: configs.cssmin,
    htmlmin: configs.htmlmin,
    jscs: configs.jscs,
    jshint: configs.jshint,
    processhtml: configs.processhtml,
    requirejs: configs.requirejs,
    watch: configs.watch
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
  grunt.registerTask('build-dev', ['clean:dev', 'copy:dev', 'babel', 'processhtml:dev']);
  grunt.registerTask('build-prod', ['clean:prod', 'copy:prod', 'babel', 'requirejs', 'processhtml:prod', 'htmlmin', 'cssmin']);
  grunt.registerTask('build-watch', ['watch']);
};
