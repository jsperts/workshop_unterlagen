import * as angular from 'angular';
import {name as authorsServiceName} from '../common/authors.service';

const authorTemplate = {
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

  $scope.navigate = function () {
    $location.path('/');
  };
}

AddAuthor.$inject = ['$scope', authorsServiceName, '$location'];

AddAuthor.prototype.submit = function () {
  this.authorsService.addAuthor(this.$scope.authorToEdit).then(() => {
    this.$location.path('/');
  }).catch(function (resp) {
    console.log(resp);
  });
};

AddAuthor.prototype.addBook = function (bookToAdd: string) {
  this.$scope.authorToEdit.books.push(bookToAdd);
};

AddAuthor.prototype.removeBook = function (index: number) {
  this.$scope.authorToEdit.books.splice(index, 1);
};

export default AddAuthor;
export const name = 'addAuthorCtrl';
