import * as angular from 'angular';
import AuthorsService, { name as authorsServiceName } from '../common/authors.service';

import { Author } from '../common/interfaces/author';

const authorTemplate: Author = {
  name: '',
  birthYear: 1950,
  books: []
};

class AddAuthor {
  authorToEdit = angular.copy(authorTemplate);
  title = 'Add Author';
  bookToAdd = '';

  constructor(private authorsService: AuthorsService, private $location) {}

  navigate() {
    this.$location.path('/');
  }

  submit() {
    this.authorsService.addAuthor(this.authorToEdit).then(() => {
      this.$location.path('/');
    }).catch(function (resp) {
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

AddAuthor.$inject = [authorsServiceName, '$location'];

export default AddAuthor;
export const name = 'addAuthorCtrl';
