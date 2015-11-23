(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'MainCtrl';
  function MainCtrl(filterService, dataService) {
    var allAuthors = dataService.getData();
    this.authors = allAuthors;
    this.searchTerm = '';

    this.filter = function filterFn() {
      this.authors = filterService.getFilteredList(allAuthors, this.searchTerm);
    };
  }
  MainCtrl.$inject = ['FilterService', 'DataService'];

  mod.controller(ctrlName, MainCtrl);
})(angular, window.MY_APP_MODULE_NAME);
