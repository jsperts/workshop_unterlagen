(function(angular) {
  'use strict';

  angular.module('testCommunication').controller('DataSetterCtrl', function($scope, Events) {
    // Set data on click
    this.setData = function() {
      $scope.$emit(Events.newData, 'New Data');
    }
  });

})(angular);
