'use strict';

var cssminConfig = {
  options: {
    shorthandCompacting: true,
    roundingPrecision: -1
  },
  target: {
    files: [{
      expand: true,
      cwd: 'styles',
      src: ['*.css'],
      dest: 'dist/',
      ext: '.min.css'
    }]
  }
};

module.exports = cssminConfig;
