(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'MainCtrl';
  function MainCtrl(filterService, dataService, $location) {
    var self = this;
    this.authors = [];
    this.searchTerm = '';

    dataService.getData().then(function(data) {
      self.authors = data;
    }, function() {
      console.log('Some error occurred');
    });

    this.filter = function filterFn() {
      var promise = dataService.getData();
      promise.then(function(data) {
        self.authors = filterService.getFilteredList(data, self.searchTerm);
      }, function() {
        console.log('Some error occurred');
      });
    };

    this.delete = function deleteAuthor(author) {
      var promise = dataService.deleteData(author._id);
      promise.then(function() {
        self.authors.splice(self.authors.indexOf(author), 1);
      }, function() {
        console.log('Some error occurred');
      });
    };

    this.navigate = function(path) {
      $location.path(path);
    };
  }
  MainCtrl.$inject = ['FilterService', 'DataService', '$location'];

  mod.controller(ctrlName, MainCtrl);
})(angular, window.MY_APP_MODULE_NAME);
