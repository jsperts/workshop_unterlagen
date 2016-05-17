const processhtmlConfig = {
  dev: {
    options: {
      process: true
    },
    files: {
      'dist/index.html': ['index.html']
    }
  },
  prod: {
    options: {
      process: true
    },
    files: {
      'dist/index.html': ['index.html']
    }
  }
};

module.exports = processhtmlConfig;
