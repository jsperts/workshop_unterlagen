import * as angular from 'angular';

export class AuthorList implements angular.IComponentController {
  private removeFn: (obj: {id: number}) => void;
  constructor(private $location: angular.ILocationService) {}

  remove(id: number) {
    this.removeFn({id});
  }

  navigate() {
    this.$location.path('/add');
  }
}
AuthorList.$inject = ['$location'];

const component: angular.IComponentOptions = {
  template: `
  <div class="row">
    <ul class="list-group">
      <li class="list-group-item active">
        <div class="row">
          <div class="col-sm-11">
            Authors List
          </div>
          <div class="col-sm-1">
            <span class="glyphicon glyphicon-plus pull-right" ng-click="$ctrl.navigate()"></span>
          </div>
        </div>
      </li>
      <li ng-repeat="author in $ctrl.authors | orderBy:'name' track by author._id" class="list-group-item">
        <my-author id="::author._id" author-name="::author.name"
        author-birth-year="::author.birthYear" remove-fn="$ctrl.remove(id)"></my-author>
        <my-author-books books="::author.books"></my-author-books>
      </li>
      <li class="list-group-item" ng-if="$ctrl.authors.length == 0">
        <div class="panel panel-info">
          <div class="panel-heading">Sorry no authors found!</div>
          <div class="panel-body">Please use a different search term</div>
        </div>
      </li>
    </ul>
  </div>
  `,
  bindings: {
    authors: '=',
    removeFn: '&'
  },
  controller: AuthorList
};

export default component;
export const name = 'myAuthorList';
