(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'AuthorsListCtrl';

  function AuthorsListCtrl($scope, dataService, $location, events) {
    var self = this;
    this.authors = [];

    dataService.getData().then(function(data) {
      self.authors = data;
    }, function() {
      console.log('Some error occurred');
    });

    this.delete = function deleteAuthor(author) {
      var promise = dataService.deleteData(author._id);
      promise.then(function() {
        self.authors.splice(self.authors.indexOf(author), 1);
      }, function() {
        console.log('Some error occurred');
      });
    };

    this.navigate = function(path) {
      console.log(path);
      $location.path(path);
    };

    $scope.$on(events.filterFinished, function($event, data) {
      self.authors = data;
    });
  }

  AuthorsListCtrl.$inject = ['$scope', 'DataService', '$location', 'Events'];

  mod.controller(ctrlName, AuthorsListCtrl);
})(angular, window.MY_APP_MODULE_NAME);
