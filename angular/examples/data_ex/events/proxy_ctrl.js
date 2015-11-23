(function(angular) {
  'use strict';

  angular.module('testCommunication', []).controller('ProxyCtrl', function($scope, Events) {
    // Do not use the same event because you will get a loop
    // This controller would also react on the $broadcast call
    $scope.$on(Events.newData, function($event, data) {
      $scope.$broadcast(Events.dataDistribute, data);
    });
    return{};
  });
})(angular);
