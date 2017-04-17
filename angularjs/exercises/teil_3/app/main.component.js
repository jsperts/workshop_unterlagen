import {name as authorsServiceName} from './authors.service';

class Main {
  constructor(authorsService) {
    this.authorsService = authorsService;
    this.authors = [];
    authorsService.getAuthors().then((data) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }

  search(searchTerm) {
    this.authors = this.authorsService.filter(searchTerm);
  }

  remove(id) {
    this.authorsService.deleteAuthor(id).then((data) => {
      this.authors = data;
    }).catch((resp) => {
      console.log(resp);
    });
  }
}
Main.$inject = [authorsServiceName];

const component = {
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
