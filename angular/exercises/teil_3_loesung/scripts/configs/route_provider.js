(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  function routeProviderConfig($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main_view.html',
      controller: 'MainCtrl',
      controllerAs: 'authorsCtrl'
    }).when('/add', {
      templateUrl: 'views/edit_view.html',
      controller: 'EditCtrl',
      controllerAs: 'editCtrl'
    }).when('/edit/:id', {
      templateUrl: 'views/edit_view.html',
      controller: 'EditCtrl',
      controllerAs: 'editCtrl'
    }).otherwise('/');
  }
  routeProviderConfig.$inject = ['$routeProvider'];

  mod.config(routeProviderConfig);
})(angular, window.MY_APP_MODULE_NAME);
