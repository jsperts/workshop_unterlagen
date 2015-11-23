(function(angular) {
  'use strict';

  var events = {
    dataDistribute: 'dataDistributeEvent',
    newData: 'newDataEvent'
  };

  angular.module('testCommunication').constant('Events', events);
})(angular);
