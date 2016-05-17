module.exports = function(grunt) {
  'use strict';

  const loadGruntTasksConfig = {
    requireResolution: true,
    pattern: ['grunt-*', '@*/grunt-*', 'gruntify-*']
  };
  require('load-grunt-tasks')(grunt, loadGruntTasksConfig);
  const configs = require('./grunt_configs');

  grunt.initConfig({
    babel: configs.babel,
    clean: configs.clean,
    copy: configs.copy,
    cssmin: configs.cssmin,
    eslint: configs.eslint,
    htmlmin: configs.htmlmin,
    processhtml: configs.processhtml,
    requirejs: configs.requirejs,
    watch: configs.watch
  });

  // Default task.
  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('build-dev', ['clean:dev', 'copy:dev', 'babel', 'processhtml:dev']);
  grunt.registerTask('build-prod', ['clean:prod', 'copy:prod', 'babel', 'requirejs', 'processhtml:prod', 'htmlmin', 'cssmin']);
  grunt.registerTask('build-watch', ['watch']);
};
