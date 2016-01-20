'use strict';

const copyConfig = {
  prod: {
    files: [{
      expand: true,
      flatten: true,
      src: '../node_modules/bootstrap/dist/css/bootstrap.min.css',
      dest: './dist',
      rename(dest, src) {
        return dest + '/css/' + src.replace('.min', '');
      }
    }, {
      expand: true,
      flatten: true,
      src: '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
      dest: './dist/fonts'
    }]
  }, dev: {
    files: [{
      expand: true,
      flatten: true,
      src: '../node_modules/bootstrap/dist/css/bootstrap.css',
      dest: './dist/css'
    }, {
      expand: true,
      flatten: true,
      src: '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
      dest: './dist/fonts'
    }]
  }
};

module.exports = copyConfig;
