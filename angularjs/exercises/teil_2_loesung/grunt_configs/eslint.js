'use strict';

const eslintConfig = {
  src: ['app/**/*.js', 'grunt_configs/*.js', 'Gruntfile.js', 'tests/**/*.js'],
  options: {
    configFile: '.eslint.yml'
  }
};

module.exports = eslintConfig;
