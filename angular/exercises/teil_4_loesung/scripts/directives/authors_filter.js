(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var directiveName = 'authorsFilter';

  function authorsFilter() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'templates/authors_filter.html',
      controller: 'AuthorsFilterCtrl',
      controllerAs: 'filterCtrl'
    };
  }
  authorsFilter.$inject = [];

  mod.directive(directiveName, authorsFilter);
})(angular, window.MY_APP_MODULE_NAME);
