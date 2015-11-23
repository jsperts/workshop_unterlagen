(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'EditCtrl';

  function EditCtrl(dataService, $routeParams, $location) {
    var self = this;

    function getId(params) {
      var id = params.id;
      if (id === undefined) {
        return undefined;
      } else {
        return Number(id);
      }
    }
    var id = getId($routeParams);
    this.formTitle = id ? 'Edit author' : 'Add author';

    dataService.getOne(id).then(function(data) {
      self.author = data;
    }, function() {
      console.log('Some error occured');
    });

    this.sendData = function sendData() {
      if (this.editForm.$valid) {
        dataService.updateOrAdd(this.author).then(function() {
          self.navigate('/');
        }, function() {
          console.log('Some error occurred');
        });
      }
    };

    this.addBook = function addBook() {
      this.author.books.push(this.bookToAdd);
      this.bookToAdd = '';
    };

    this.removeBook = function removeBook(index) {
      this.author.books.splice(index, 1);
    };

    this.navigate = function navigate(path) {
      $location.path(path);
    };
  }
  EditCtrl.$inject = ['DataService', '$routeParams', '$location'];

  mod.controller(ctrlName, EditCtrl);
})(angular, window.MY_APP_MODULE_NAME);
