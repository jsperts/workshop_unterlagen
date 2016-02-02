/*global module:false*/

var requirejsConfig = {
  compile: {
    options: {
      include: 'main',
      baseUrl: 'build/',
      name: '../../node_modules/almond/almond', // assumes a production build using almond
      out: 'dist/app.min.js'
    }
  }
};

module.exports = requirejsConfig;
