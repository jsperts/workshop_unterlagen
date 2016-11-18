(function (angular) {
  'use strict';

  function routeProviderConfig($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './app/main.template.html',
    }).otherwise('/');
  }

  angular.module('app').config(['$routeProvider', routeProviderConfig]);
})(angular);
