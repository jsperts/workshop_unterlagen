const component = {
  template: `
  <div class="row">
    <ul class="list-group">
      <li class="list-group-item active">
        <div class="row">
          <div class="col-sm-11">
            Authors List
          </div>
          <div class="col-sm-1">
            <span class="glyphicon glyphicon-plus pull-right"></span>
          </div>
        </div>
      </li>
      <li ng-repeat="author in $ctrl.authors | orderBy:'name' track by author._id" class="list-group-item">
        <my-author author-name="::author.name" author-birth-year="::author.birthYear"></my-author>
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
    authors: '='
  }
};

export default component;
export const name = 'myAuthorList';
