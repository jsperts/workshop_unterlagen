(function (angular) {
  'use strict';

  function EditAuthor($scope, authorsService, $routeParams, $location) {
    this.authorsService = authorsService;
    var id = Number($routeParams.id);
    this.authorsService.getAuthor(id).then((author) => {
      $scope.authorToEdit = angular.copy(author);
    }).catch((resp) => {
      console.log(resp);
    });
    this.$location = $location;
    this.$scope = $scope;

    $scope.title = 'Edit Author';
    $scope.bookToAdd = '';

    $scope.submit = this.submit.bind(this);
    $scope.addBook = this.addBook.bind(this);
    $scope.removeBook = this.removeBook.bind(this);

    $scope.navigate = function() {
      $location.path('/');
    };
  }

  EditAuthor.$inject = ['$scope', 'AuthorsService', '$routeParams', '$location'];

  EditAuthor.prototype.submit = function () {
    var self = this;
    this.authorsService.updateAuthor(this.$scope.authorToEdit).then(function() {
      self.$location.path('/');
    }).catch(function(resp) {
      console.log(resp);
    });
  };

  EditAuthor.prototype.addBook = function(bookToAdd) {
    this.$scope.authorToEdit.books.push(bookToAdd);
  };

  EditAuthor.prototype.removeBook = function(index) {
    this.$scope.authorToEdit.books.splice(index, 1);
  };

  angular.module('app.manipulate_author')
      .controller('editAuthorCtrl', EditAuthor);
})(angular);
