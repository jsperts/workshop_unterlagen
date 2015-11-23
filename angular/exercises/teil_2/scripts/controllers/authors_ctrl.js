(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'MainCtrl';
  function MainCtrl(dataService) {
    this.authors = [];
    this.searchTerm = '';

    this.filter = function filterFn() {
      // TODO: Copy the code from part 1
      // It might need adjusting to work with data from server instead of static data
    };

    this.delete = function deleteAuthor(author) {
      // TODO: Implement a function to delete an author from the authors list and the server
    };
  }
  MainCtrl.$inject = ['DataService'];

  mod.controller(ctrlName, MainCtrl);
})(angular, window.MY_APP_MODULE_NAME);
