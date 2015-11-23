'use strict';

var babelConfig = {
  options: {
    sourceMap: true,
    modules: 'amd'
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: '**/*.js',
      dest: 'build/'
    }]
  }
};

module.exports = babelConfig;
