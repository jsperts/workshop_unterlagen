'use strict';

const protractorRunnerConfig = {
  options: {
    noColors: false,
    configFile: ''
  },
  all: {
    options: {
      args: {
        capabilities: {
          browserName: 'chrome'
        },
        specs: [
          'tests/e2e/search.spec.js',
          'tests/e2e/delete_author.spec.js',
          'tests/e2e/manipulate_author/add_author.spec.js',
          'tests/e2e/manipulate_author/edit_author.spec.js'
        ],
        baseUrl: 'http://localhost:8080'
      },
      webdriverManagerUpdate: true
    }
  }
};

module.exports = protractorRunnerConfig;
