(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var serviceName = 'DataService';

  function DataService() {
    function getData() {
      // TODO: copy from part 2
    }

    return {
      getData: getData
    };
  }
  DataService.$inject = [];

  mod.factory(serviceName, DataService);
})(angular, window.MY_APP_MODULE_NAME);
