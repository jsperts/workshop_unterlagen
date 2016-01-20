module.exports = function(grunt) {
  'use strict';

  const loadGruntTasksConfig = {
    pattern: ['grunt-*', '@*/grunt-*', 'gruntify-*'],
    requireResolution: true
  };
  require('load-grunt-tasks')(grunt, loadGruntTasksConfig);
  const configs = require('./grunt_configs');

  grunt.initConfig({
    clean: configs.clean,
    copy: configs.copy,
    env: configs.env,
    eslint: configs.eslint,
    'http-server': configs.http_server,
    karma: configs.karma,
    protractor: configs.protractor,
    watch: configs.watch,
    webpack: configs.webpack
  });

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('build-dev', ['clean:dev', 'copy:dev', 'env:dev', 'webpack:dev']);
  grunt.registerTask('build-prod', ['clean:prod', 'copy:prod', 'env:prod', 'webpack:prod']);
  grunt.registerTask('serve', ['build-dev', 'http-server:dev']);

  grunt.registerTask('test-unit', ['env:dev', 'karma:unit']);
  grunt.registerTask('test-integration', ['env:dev', 'karma:integration']);
  grunt.registerTask('test-e2e', ['build-dev', 'protractor:all']);
  grunt.registerTask('test', ['eslint', 'test-unit', 'test-integration', 'test-e2e']);
};
