/*global module:false*/

var processhtmlConfig = {
  dev: {
    options: {
      process: true
    },
    files: {
      'build/index.html': ['index.html']
    }
  },
  prod: {
    options: {
      process: true
    },
    files: {
      'build/index.html': ['index.html']
    }
  }
};

module.exports = processhtmlConfig;
