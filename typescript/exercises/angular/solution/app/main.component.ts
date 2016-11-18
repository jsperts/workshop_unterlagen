import * as angular from 'angular';

import AuthorService, {name as authorsServiceName} from './common/authors.service';
import {AuthorWithID} from './common/interfaces/author';

export class Main implements angular.IComponentController {
  authors: Array<AuthorWithID> = [];

  constructor(private authorsService: AuthorService) {}

  $onInit() {
    this.authorsService.getAuthors().then((data: Array<AuthorWithID>) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }

  search(searchTerm: string) {
    this.authors = this.authorsService.filter(searchTerm);
  }

  remove(id: number) {
    this.authorsService.deleteAuthor(id).then((data: Array<AuthorWithID>) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
Main.$inject = [authorsServiceName];

const component: angular.IComponentOptions = {
  template: `
    <my-header></my-header>
    <ng-view></ng-view>
  `,
  controller: Main
};

const routingTemplate = `<my-search search="$ctrl.search(searchTerm)"></my-search>
      <my-author-list authors="$ctrl.authors" remove-fn="$ctrl.remove(id)"></my-author-list>`;

export default component;
export const name = 'myApp';
export {routingTemplate};
