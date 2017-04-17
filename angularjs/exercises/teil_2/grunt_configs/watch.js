'use strict';

const watchConfig = {
  dev: {
    files: ['app/**/*'],
    tasks: ['build-dev'],
    options: {
      spawn: false
    }
  }
};

module.exports = watchConfig;
