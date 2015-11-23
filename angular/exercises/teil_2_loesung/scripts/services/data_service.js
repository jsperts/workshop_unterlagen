(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'DataService';

  function DataService($http, $q) {
    var baseUrl = 'http://127.0.0.1:8080/api/v1/author/';

    function getData() {
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: baseUrl,
          cache: true
        }).then(function(response) {
          resolve(response.data);
        }, reject);
      });
    }

    function deleteData(id) {
      return $q(function(resolve, reject) {
        $http({
          method: 'DELETE',
          url: baseUrl + id
        }).then(function() {
          resolve();
        }, reject);
      });
    }

    return {
      getData: getData,
      deleteData: deleteData
    };
  }
  DataService.$inject = ['$http', '$q'];

  mod.factory(serviceName, DataService);
})(angular, window.MY_APP_MODULE_NAME);
