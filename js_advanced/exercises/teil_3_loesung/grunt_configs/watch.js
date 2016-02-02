/*global module:false*/

var watchConfig = {
  scripts: {
    files: ['src/**/*.js', 'index.html'],
    tasks: ['build-dev'],
    options: {
      spawn: false,
      debounceDelay: 1000
    }
  }
};

module.exports = watchConfig;
