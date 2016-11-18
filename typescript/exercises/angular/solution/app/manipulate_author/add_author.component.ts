import * as angular from 'angular';

import AuthorsService, {name as authorsServiceName} from '../common/authors.service';
import {Author} from '../common/interfaces/author';

const authorTemplate: Author = {
  name: '',
  birthYear: 1950,
  books: []
};

export class AddAuthor implements angular.IComponentController {
  private author: Author;

  constructor(
      private authorsService: AuthorsService,
      private $location: angular.ILocationService
  ) {}

  $onInit() {
    this.author = angular.copy(authorTemplate);
  }

  submit(newAuthor: Author) {
    this.authorsService.addAuthor(newAuthor).then(() => {
      this.$location.path('/');
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
AddAuthor.$inject = [authorsServiceName, '$location'];

const component: angular.IComponentOptions = {
  template: `<my-authors-form title="Add Author" author="$ctrl.author" on-submit="$ctrl.submit(author)"></my-authors-form>`,
  controller: AddAuthor
};

export default component;
export const name = 'myAddAuthor';
