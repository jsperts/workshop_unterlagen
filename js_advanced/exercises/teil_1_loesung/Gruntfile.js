module.exports = function(grunt) {
  'use strict';

  const loadGruntTasksConfig = {
    requireResolution: true,
    pattern: ['grunt-*', '@*/grunt-*', 'gruntify-*']
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
          dest: 'dist/'
        }]
      }
    },
    eslint: {
      src: ['**/*.js'],
      options: {
        configFile: '.eslintrc.yml'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('build-dev', ['babel']);
};
