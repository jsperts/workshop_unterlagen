class Sub {
  constructor($scope) {
    this.gotBroadcast = false;
    this.gotEmit = false;
    this._$scope = $scope;
    $scope.$on('broadcast', () => {
      this.gotBroadcast = true;
    });
    $scope.$on('emit', () => {
      this.gotEmit = true;
    });
    $scope.$on('reset', () => {
      this.gotBroadcast = false;
      this.gotEmit = false;
    });
  }

  broadcast() {
    this._$scope.$broadcast('broadcast');
  }

  emit() {
    this._$scope.$emit('emit');
  }
}
Sub.$inject = ['$scope'];

const component = {
  template: `
    <div class="ctrl"
        ng-class="{'highlight': sub.gotBroadcast || sub.gotEmit}">
      <h3>Sub Cmp {{sub.num}}</h3>
      <p>
        <span ng-click="sub.emit()">Emit</span>
        <span ng-click="sub.broadcast()">Broadcast</span>
      </p>
      <div ng-transclude></div>
    </div>
  `,
  controller: Sub,
  controllerAs: 'sub',
  bindings: {
    num: '='
  },
  transclude: true
};

export default component;
export const name = 'subCmp';
