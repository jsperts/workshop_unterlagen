const copyConfig = {
  prod: {
    files: [{
      expand: true, src: ['images/*'], dest: 'dist/'       // includes files within path
    }]
  },
  dev: {
    files: [{
      expand: true, src: ['images/*'], dest: 'build/'
    }]
  }
};

module.exports = copyConfig;
