(function(angular) {
  'use strict';

  angular.module('testCommunication').controller('DataSetterCtrl', function(ProxyService) {
    // Set data on controller load
    ProxyService.setData('Data on load');

    // Set data on click
    this.setData = function() {
      ProxyService.setData('Data on click');
    }
  });

})(angular);
