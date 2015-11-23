(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'DataService';

  function DataService($http, $q, dummyAuthor, baseUrl, cacheService) {
    function addNew(data) {
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: baseUrl,
          data: data
        }).then(resolve, reject);
      });
    }

    function update(id, data) {
      return $q(function(resolve, reject) {
        $http({
          method: 'PUT',
          url: baseUrl + id,
          data: data
        }).then(resolve, reject);
      });
    }

    // Public functions
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

    function getOne(id) {
      return $q(function(resolve, reject) {
        if (id === undefined) {
          // We need a new copy of the dummyAuthor otherwise it would be changed
          // when we add a new entry
          resolve(angular.copy(dummyAuthor));
        } else {
          $http({
            method: 'GET',
            url: baseUrl + id,
            cache: true
          }).then(function(response) {
            resolve(response.data);
          }, reject);
        }
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

    function updateOrAdd(data) {
      if (data._id !== undefined) {
        return update(data._id, data).then(function() {
          cacheService.update(data, 'update');
        });
      } else {
        return addNew(data).then(function(response) {
          var id = response.data;
          data._id = id;
          cacheService.update(data, 'add');
        });
      }
    }

    return {
      getData: getData,
      getOne: getOne,
      deleteData: deleteData,
      updateOrAdd: updateOrAdd
    };
  }
  DataService.$inject = ['$http', '$q', 'DummyAuthor', 'BaseUrl', 'CacheService'];

  mod.factory(serviceName, DataService);
})(angular, window.MY_APP_MODULE_NAME);
