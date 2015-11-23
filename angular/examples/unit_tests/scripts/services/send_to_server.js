(function(angular) {
  'use strict';

  var mod = angular.module('testApp');

  function SendToServer($http) {
    function send(data) {
      return $http.post('/color', {data: data});
    }
    return {
      send: send
    };
  }
  SendToServer.$inject = ['$http'];

  mod.factory('SendToServer', SendToServer);
})(angular);
