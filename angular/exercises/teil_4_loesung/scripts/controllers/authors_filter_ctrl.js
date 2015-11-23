(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'AuthorsFilterCtrl';

  function AuthorsFilterCtrl(dataService, filterService, $rootScope, events) {
    var self = this;
    this.searchTerm = '';

    this.filter = function filterFn() {
      var promise = dataService.getData();
      promise.then(function(data) {
        var filteredList = filterService.getFilteredList(data, self.searchTerm);
        $rootScope.$broadcast(events.filterFinished, filteredList);
      }, function() {
        console.log('Some error occurred');
      });
    };
  }
  AuthorsFilterCtrl.$inject = ['DataService', 'FilterService', '$rootScope', 'Events'];

  mod.controller(ctrlName, AuthorsFilterCtrl);
})(angular, window.MY_APP_MODULE_NAME);
