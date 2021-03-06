class AuthorBooks {
  constructor() {}
}

const component = {
  template: `
    <ul class="list-group">
      <li class="list-group-item active">Books:</li>
      <li class="list-group-item" ng-repeat="book in ::$ctrl.books">{{::book}}</li>
    </ul>
  `,
  controller: AuthorBooks,
  bindings: {
    books: '='
  }
};

export default component;
export const name = 'myAuthorBooks';
