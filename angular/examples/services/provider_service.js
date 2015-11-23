(function(angular) {
  'use strict';

  var mod = angular.module('ServicesDemo');

  mod.provider('ProviderService', function() {
    this.config = function(name) {
      this.name = name;
    };
    // this in $get function === this of provider function
    this.$get = function() {
      var self = this;
      return {
        getName: function() {
          return self.name;
        }
      };
    }
  });

  mod.config(['ProviderServiceProvider', function(ProviderServiceProvider) {
    var name = 'Name for Provider';
    ProviderServiceProvider.config(name);
  }]);

  mod.controller('ProviderCtrl', function(ProviderService) {
    this.name = ProviderService.getName(); // 'Name for Provider'
  });

})(angular);
