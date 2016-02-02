/*global module:false*/

var babelConfig = {
  options: {
    sourceMap: true,
    presets: ['es2015'],
    plugins: ['transform-es2015-modules-amd']
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: './**/*.js',
      dest: 'build/'
    }]
  }
};

module.exports = babelConfig;
