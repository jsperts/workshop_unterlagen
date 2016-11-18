import * as angular from 'angular';

export class Author implements angular.IComponentController {
  private id: number;
  removeFn: (obj: {id: number}) => void;
  constructor(private $location: angular.ILocationService) {}

  remove() {
    this.removeFn({id: this.id});
  }
  navigate() {
    this.$location.path(`/edit/${this.id}`);
  }
}
Author.$inject = ['$location'];

const component: angular.IComponentOptions = {
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
                <span class="glyphicon glyphicon-remove" ng-click="$ctrl.remove()"></span>
              </div>
              <div class="col-sm-6">
                <span class="glyphicon glyphicon-edit" ng-click="$ctrl.navigate()"></span>
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
    birthYear: '=authorBirthYear',
    id: '=',
    removeFn: '&'
  }
};

export default component;
export const name = 'myAuthor';
