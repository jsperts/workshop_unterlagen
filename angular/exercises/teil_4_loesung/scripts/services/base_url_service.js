(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var constantName = 'BaseUrl';

  var baseUrl = 'http://127.0.0.1:8080/api/v1/author/';

  mod.constant(constantName, baseUrl);
})(angular, window.MY_APP_MODULE_NAME);
