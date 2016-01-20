class Search {
  constructor() {
    this.searchTerm = '';
  }

  search() {
    this.onSearch({searchTerm: this.searchTerm});
  }
}

const component = {
  template: `
   <div class="row panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Search</h3>
    </div>
    <div class="panel-body">
      <div class="col-sm-8">
        <input class="form-control" type="text" ng-model="$ctrl.searchTerm"/>
      </div>
      <div>
        <button class="btn btn-primary col-sm-4" type="button" ng-click="$ctrl.search()">Search</button>
      </div>
    </div>
  </div>
  `,
  controller: Search,
  bindings: {
    onSearch: '&search'
  }
};

export default component;
export const name = 'mySearch';
