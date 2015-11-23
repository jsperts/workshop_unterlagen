(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var constantName = 'DummyAuthor';

  var dummyAuthor = {
    name: undefined,
    birthYear: undefined,
    books: []
  };

  mod.constant(constantName, dummyAuthor);
})(angular, window.MY_APP_MODULE_NAME);
