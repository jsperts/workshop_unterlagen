(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'MainCtrl';
  function MainCtrl(dataService, $location) {
    var self = this;
    this.authors = [];
    this.searchTerm = '';

    // TODO: get data from server

    this.filter = function filterFn() {
      // TODO: Copy the code from part 2
    };

    this.delete = function deleteAuthor(author) {
      // TODO: Copy the code from part 2
    };

    this.navigate = function(path) {
      $location.path(path);
    }
  }
  MainCtrl.$inject = ['DataService', '$location'];

  mod.controller(ctrlName, MainCtrl);
})(angular, window.MY_APP_MODULE_NAME);
