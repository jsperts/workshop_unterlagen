(function(angular) {
  'use strict';

  angular.module('testCommunication').controller('DataGetterCtrl', function($scope, Events) {
    var self = this;

    // get Data when new data available
    $scope.$on(Events.dataDistribute, function($event, data) {
      self.data = data;
    });
  });
})(angular);
