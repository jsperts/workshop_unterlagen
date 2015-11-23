'use strict';

var jshintConfig = {
  options: {
    bitwise: true,
    curly: true,
    eqeqeq: true,
    esnext: true, // es6 features
    forin: true,
    freeze: true,
    latedef: 'nofunc',
    noarg: true,
    nonew: true,
    singleGroups: true,
    strict: false, // es6 modules are strict by default
    undef: true,
    unused: true,
    browser: true,
    globals: {
      require: true
    }
  },
  app: {
    files: {
      src: ['src/*.js']
    }
  }
};

module.exports = jshintConfig;
