class Main {
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
Main.$inject = ['$scope'];

const component = {
  template: `
    <div class="ctrl"
        ng-class="{'highlight': main.gotBroadcast || main.gotEmit}">
      <h3>Main Component</h3>
      <p>
        <span ng-click="main.emit()">Emit</span>
        <span ng-click="main.broadcast()">Broadcast</span>
      </p>
      <sub-cmp num="1">
        <sub-cmp num="1.1"></sub-cmp>
        <sub-cmp num="1.2"></sub-cmp>
      </sub-cmp>
      <sub-cmp num="2">
        <sub-cmp num="2.1"></sub-cmp>
        <sub-cmp num="2.2"></sub-cmp>
      </sub-cmp>
    </div>
  `,
  controller: Main,
  controllerAs: 'main'
};

export default component;
export const name = 'mainCmp';
