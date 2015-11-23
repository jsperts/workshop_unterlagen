(function(angular) {
  'use strict';

  angular.module('testCommunication', []).factory('ProxyService', function() {
    var data = '';
    var listener;

    return {
      setData: function(d) {
        data = d;
        listener(data);
      },
      getData: function() {
        return data;
      },
      addDataListener: function(cb) {
        listener = cb;
      }
    };
  });

})(angular);
