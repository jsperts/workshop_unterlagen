/*global module:false*/

var copyConfig = {
  prod: {
    files: [
      // includes files within path
      {
        expand: true, src: ['images/*'], dest: 'dist/'
      }
          ]
  },
  dev: {
    files: [
      {
        expand: true, src: ['images/*'], dest: 'build/'
      }
          ]
  }
};

module.exports = copyConfig;
