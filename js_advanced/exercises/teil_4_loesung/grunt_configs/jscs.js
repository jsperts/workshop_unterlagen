'use strict';

var jscsConfig = {
  app: {
    options: {
      config: 'jscs.json',
      fix: true
    },
    files: {
      src: ['src/**/*.js']
    }
  }
};

module.exports = jscsConfig;
