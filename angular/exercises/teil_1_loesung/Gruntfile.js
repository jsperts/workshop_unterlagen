/*global module:false*/

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jscs: {
      app: {
        options: {
          config: 'jscs.json'
        },
        files: {
          src: ['scripts/**/*.js', 'Gruntfile.js']
        }
      }
    },
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: 'nofunc',
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: 'single',
        regexp: true,
        singleGroups: true,
        strict: true,
        undef: true,
        unused: true,
        browser: true,
        globals: {
          angular: true
        }
      },
      app: {
        files: {
          src: ['scripts/**/*.js', 'Gruntfile.js']
        }
      }
    }, tags: {
      buildScripts: {
        options: {
          scriptTemplate: '<script type="text/javascript" src="{{ path }}"></script>',
          openTag: '<!-- start script template tags -->',
          closeTag: '<!-- end script template tags -->'
        },
        src: [
          'scripts/**/*.js',
          '!scripts/app.js'
        ],
        dest: 'index.html'
      },
      buildLinks: {
        options: {
          linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}"/>',
          openTag: '<!-- start css template tags -->',
          closeTag: '<!-- end css template tags -->'
        },
        src: [
          'styles/**/*.css'
        ],
        dest: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-script-link-tags');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jscs']);
  grunt.registerTask('buildTags', ['tags']);
};
