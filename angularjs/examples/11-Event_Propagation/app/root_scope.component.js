class Root {
  constructor($rootScope) {
    this.gotBroadcast = false;
    this.gotEmit = false;
    this._$rootScope = $rootScope;

    $rootScope.$on('broadcast', () => {
      this.gotBroadcast = true;
    });
    $rootScope.$on('emit', () => {
      this.gotEmit = true;
    });
  }

  broadcast() {
    this._$rootScope.$broadcast('broadcast');
  }

  emit() {
    this._$rootScope.$emit('emit');
  }

  reset() {
    this.gotEmit = false;
    this.gotBroadcast = false;
    this._$rootScope.$broadcast('reset');
  }
}
Root.$inject = ['$rootScope'];

const component = {
  template: `
    <div class="ctrl"
        ng-class="{'highlight': root.gotBroadcast || root.gotEmit}">
      <h3>rootCtrl</h3>
      <p>
        <span ng-click="root.reset()">Reset</span>
        <span ng-click="root.emit()">Emit</span>
        <span ng-click="root.broadcast()">Broadcast</span>
      </p>
      <main-cmp></main-cmp>
    </div>
  `,
  controller: Root,
  controllerAs: 'root'
};

export default component;
export const name = 'myApp';
