(function (angular) {
  'use strict';

  angular.module('app', ['ngRoute', 'app.common', 'app.manipulate_author']);
  angular.element(document).ready(function() {
    angular.bootstrap(document.body, ['app']);
  });
})(angular);
