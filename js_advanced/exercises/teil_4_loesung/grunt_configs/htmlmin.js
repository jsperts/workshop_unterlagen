const htmlminConfig = {
  multiple: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['dist/index.html'],
      dest: 'dist/'
    }]
  }
};

module.exports = htmlminConfig;
