(function (angular) {
  'use strict';

  var authorTemplate = {
    name: '',
    birthYear: 1950,
    books: []
  };

  function AddAuthor($scope, authorsService, $location) {
    this.authorsService = authorsService;
    this.$location = $location;

    this.$scope = $scope;

    $scope.title = 'Add Author';
    $scope.bookToAdd = '';
    $scope.authorToEdit = angular.copy(authorTemplate);

    $scope.submit = this.submit.bind(this);
    $scope.addBook = this.addBook.bind(this);
    $scope.removeBook = this.removeBook.bind(this);

    $scope.navigate = function() {
      $location.path('/');
    };
  }

  AddAuthor.$inject = ['$scope', 'AuthorsService', '$location'];

  AddAuthor.prototype.submit = function () {
    var self = this;
    this.authorsService.addAuthor(this.$scope.authorToEdit).then(function() {
      self.$location.path('/');
    }).catch(function(resp) {
      console.log(resp);
    });
  };

  AddAuthor.prototype.addBook = function(bookToAdd) {
    this.$scope.authorToEdit.books.push(bookToAdd);
  };

  AddAuthor.prototype.removeBook = function(index) {
    this.$scope.authorToEdit.books.splice(index, 1);
  };

  angular.module('app.manipulate_author')
      .controller('addAuthorCtrl', AddAuthor);
})(angular);
