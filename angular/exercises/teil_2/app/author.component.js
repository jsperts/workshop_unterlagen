class Author {
  constructor() {}

}

const component = {
  template: `
    <div class="row">
      <div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading">Name:</div>
          <div class="panel-body">{{::$ctrl.name}}</div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading">Birth Year:</div>
          <div class="panel-body">{{::$ctrl.birthYear}}</div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading">Controls:</div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-6">
                <span class="glyphicon glyphicon-remove"></span>
              </div>
              <div class="col-sm-6">
                <span class="glyphicon glyphicon-edit"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  controller: Author,
  bindings: {
    name: '=authorName',
    birthYear: '=authorBirthYear'
  }
};

export default component;
export const name = 'myAuthor';
