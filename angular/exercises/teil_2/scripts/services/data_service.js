(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'DataService';

  function DataService() {
    var baseUrl = 'http://127.0.0.1:8080/api/v1/author/';

    function getData() {
      // TODO: get data from server using baseUrl
    }

    return {
      getData: getData
    };
  }
  DataService.$inject = [];

  mod.factory(serviceName, DataService);
})(angular, window.MY_APP_MODULE_NAME);
