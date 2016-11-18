import * as angular from 'angular';
import AuthorsService, { name as authorsServiceName } from '../common/authors.service';

import { AuthorWithID } from '../common/interfaces/author';

class EditAuthor {
  authorToEdit: AuthorWithID;
  title = 'Edit Author';
  bookToAdd = '';

  constructor(private authorsService: AuthorsService, private $routeParams, private $location) {
    const id = Number($routeParams.id);
    this.authorsService.getAuthor(id).then((author: AuthorWithID) => {
      this.authorToEdit = angular.copy(author);
    }).catch((resp) => {
      console.log(resp);
    });
  }

  navigate() {
    this.$location.path('/');
  }

  submit() {
    this.authorsService.updateAuthor(this.authorToEdit).then(() => {
      this.$location.path('/');
    }).catch((resp) => {
      console.log(resp);
    });
  }

  addBook(bookToAdd: string) {
    this.authorToEdit.books.push(bookToAdd);
  }

  removeBook(index: number) {
    this.authorToEdit.books.splice(index, 1);
  }
}

EditAuthor.$inject = [authorsServiceName, '$routeParams', '$location'];

export default EditAuthor;
export var name = 'editAuthorCtrl';
