/*global module:false*/

var jscsConfig = {
  app: {
    options: {
      config: 'jscs.json',
      fix: true
    },
    files: {
      src: ['./**/*.js', '!./build/*', '!./dist/*']
    }
  }
};

module.exports = jscsConfig;
