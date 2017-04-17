import {name as authorsServiceName} from './authors.service';

class Main {
  constructor(authorsService) {
    this.authorsService = authorsService;
    this.authors = authorsService.getAuthors();
  }

  search(searchTerm) {
    this.authors = this.authorsService.filter(searchTerm);
  }
}
Main.$inject = [authorsServiceName];

const component = {
  template: `
    <my-header></my-header>
    <my-search search="$ctrl.search(searchTerm)"></my-search>
    <my-author-list authors="$ctrl.authors"></my-author-list>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
