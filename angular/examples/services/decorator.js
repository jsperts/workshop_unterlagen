(function(angular) {
  'use strict';

  var mod = angular.module('ServicesDemo');

  mod.factory('ServiceWithDecorator', function() {
    return {
      getName: function() {
        return 'Max';
      }
    };
  });

  // Angular 1.4.x
  // $delegate is the original service (ServiceWithDecorator)
  // You have to use $delegate as the name
  mod.decorator('ServiceWithDecorator', function($delegate) {
    return {
      getName: function() {
        return 'Decorated: ' + $delegate.getName();
      }
    }
  });

  // Angular 1.3.x
  /*mod.config(function($provide) {
    // $delegate is the original service (ServiceWithDecorator)
    // You have to use $delegate as the name
    $provide.decorator('ServiceWithDecorator', function($delegate) {
      return {
        getName: function() {
          return 'Decorated: ' + $delegate.getName();
        }
      };
    });
  });*/

  mod.controller('DecoratorCtrl', function(ServiceWithDecorator) {
    this.name = ServiceWithDecorator.getName();
  });
})(angular);
