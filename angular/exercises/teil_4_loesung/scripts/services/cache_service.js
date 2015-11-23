(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'CacheService';

  // Disclaimer: This is a rather quick & dirty solution to the caching problem
  // You would probably want to implement your own cache instead of using the default one
  // Furthermore you should probably check yourself if the cache contains an entry and not have $http check the cache
  function CacheService($cacheFactory, baseUrl) {
    // Get standard $http cache
    var cache = $cacheFactory.get('$http');

    var operations = {
      update: updateCacheForUpdate,
      add: updateCacheForAdd
    };

    function updateCacheForAdd(baseUrlCacheEntry, newEntry) {
      if (baseUrlCacheEntry !== undefined) {
        var currentEntries = JSON.parse(baseUrlCacheEntry[1]);
        currentEntries.push(newEntry);
        baseUrlCacheEntry[1] = JSON.stringify(currentEntries);
      }
    }

    function updateCacheForUpdate(baseUrlCacheEntry, dataToUpdate) {
      // CacheId needs to be the string used to get the cache entry
      // (String used by a GET request)
      var cacheId = baseUrl + dataToUpdate._id;

      // Update one entry
      // cacheEntry was placed there by $http
      // It is an array with statusCode, the data in JSON format, an object with the headers and the status text
      var cacheEntry = cache.get(cacheId);
      cacheEntry[1] = JSON.stringify(dataToUpdate);
      cache.put(cacheId, cacheEntry);

      // Update list of all entries
      if (baseUrlCacheEntry !== undefined) {
        var currentEntries = JSON.parse(baseUrlCacheEntry[1]);
        var entriesLength = currentEntries.length;
        for (var i = 0; i < entriesLength; i++) {
          var entry = currentEntries[i];
          if (entry._id === dataToUpdate._id) {
            currentEntries[i] = dataToUpdate;
            break;
          }
        }
        baseUrlCacheEntry[1] = JSON.stringify(currentEntries);
      }
    }

    function updateCache(data, operation) {
      // After we added/updated an author via the form we need to update the cache
      var baseUrlCacheEntry = cache.get(baseUrl);
      var fn = operations[operation];
      fn(baseUrlCacheEntry, data);
    }

    return {
      update: updateCache
    };
  }
  CacheService.$inject = ['$cacheFactory', 'BaseUrl'];

  mod.factory(serviceName, CacheService);
})(angular, window.MY_APP_MODULE_NAME);
