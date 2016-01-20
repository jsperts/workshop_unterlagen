'use strict';

const httpServeerConfig = {
  dev: {
    // the server root directory
    root: './dist',
    port: 8080,
    host: '127.0.0.1',
    showDir: true,
    autoIndex: true,
    // server default file extension
    ext: 'html',
    // run in parallel with other tasks
    runInBackground: false
  }
};

module.exports = httpServeerConfig;
