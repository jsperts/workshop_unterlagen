(function(angular) {
  'use strict';

  angular.module('testCommunication').controller('DataGetterCtrl', function(ProxyService) {
    var self = this;

    // get Data on click
    this.getData = function() {
      this.data = ProxyService.getData();
    };

    // get Data when new data available
    ProxyService.addDataListener(function(data) {
      self.data = data;
    });
  });
})(angular);
