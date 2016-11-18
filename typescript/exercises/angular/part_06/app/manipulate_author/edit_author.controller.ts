import * as angular from 'angular';
import {name as authorsServiceName} from '../common/authors.service';

function EditAuthor($scope, authorsService, $routeParams, $location) {
  this.authorsService = authorsService;
  const id = Number($routeParams.id);
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

  $scope.navigate = function () {
    $location.path('/');
  };
}

EditAuthor.$inject = ['$scope', authorsServiceName, '$routeParams', '$location'];

EditAuthor.prototype.submit = function () {
  this.authorsService.updateAuthor(this.$scope.authorToEdit).then(() => {
    this.$location.path('/');
  }).catch((resp) => {
    console.log(resp);
  });
};

EditAuthor.prototype.addBook = function (bookToAdd: string) {
  this.$scope.authorToEdit.books.push(bookToAdd);
};

EditAuthor.prototype.removeBook = function (index: number) {
  this.$scope.authorToEdit.books.splice(index, 1);
};

export default EditAuthor;
export var name = 'editAuthorCtrl';
