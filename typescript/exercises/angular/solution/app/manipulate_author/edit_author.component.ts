import * as angular from 'angular';

import AuthorsService, {name as authorsServiceName} from '../common/authors.service';
import {AuthorWithID} from '../common/interfaces/author';

export class EditAuthor implements angular.IComponentController {
  author: AuthorWithID;

  constructor(
      private authorsService: AuthorsService,
      private $routeParams: angular.route.IRouteParamsService,
      private $location: angular.ILocationService
  ) {}

  $onInit() {
    const id = Number(this.$routeParams['id']);
    this.authorsService.getAuthor(id).then((author: AuthorWithID) => {
      this.author = angular.copy(author);
    }).catch((resp) => {
      console.log(resp);
    });
  }

  submit(authorToUpdate: AuthorWithID) {
    this.authorsService.updateAuthor(authorToUpdate).then(() => {
      this.$location.path('/');
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
EditAuthor.$inject = [authorsServiceName, '$routeParams', '$location'];

const component: angular.IComponentOptions = {
  template: `<my-authors-form title="Edit Author" author="$ctrl.author" on-submit="$ctrl.submit(author)"></my-authors-form>`,
  controller: EditAuthor,
};

export default component;
export const name = 'myEditAuthor';
