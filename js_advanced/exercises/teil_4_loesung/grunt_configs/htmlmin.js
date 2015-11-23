'use strict';

var htmlminConfig = {
  multiple: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['build/index.html'],
      dest: 'dist/'
    }]
  }
};

module.exports = htmlminConfig;
