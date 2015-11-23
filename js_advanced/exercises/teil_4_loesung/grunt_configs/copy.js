'use strict';

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

/*main: {
  files: [
    // includes files within path
    {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

    // includes files within path and its sub-directories
    {expand: true, src: ['path/**'], dest: 'dest/'},

    // makes all src relative to cwd
    {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

    // flattens results to a single level
    {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
  ],
}
,*/
