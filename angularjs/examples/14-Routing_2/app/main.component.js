class Main {
  constructor($scope, $route, $window) {
    this.current = $route.current;
    $scope.$on('$locationChangeStart', (event, newUrl, oldUrl) => {
      this.locationStatus = 'Location change start';
      this.oldUrl = oldUrl;
      this.newUrl = newUrl;
    });
    $scope.$on('$routeChangeStart', (event, next, current) => {
      this.current = current;
      this.next = next;
      this.status = 'Route change start';
    });

    $scope.$on('$locationChangeSuccess', (event, newUrl, oldUrl) => {
      this.locationStatus = 'Location change success';
      this.oldUrl = oldUrl;
      this.newUrl = newUrl;
    });
    $scope.$on('$routeChangeSuccess', (event, current, previous) => {
      this.current = current;
      this.previous = previous;
      this.status = 'Route change success';
    });

    $scope.$on('$routeChangeError', (event, current, previous, rejection) => {
      this.current = current;
      this.previous = previous;
      this.status = `Route change failed: ${rejection}`;
    });
  }
}
Main.$inject = ['$scope', '$route', '$window'];

const component = {
  template: `
    <a href="#!/comp1?name=comp1">Component 1</a> <a href="#!/comp2?name=comp2">Component 2</a>
    <div>Route status: {{$ctrl.status}}</div>
    <div>
      <pre>Previous: {{$ctrl.previous.params.name}}</pre>
      <pre>Current: {{$ctrl.current.params.name}}</pre>
      <pre>Next: {{$ctrl.next.params.name}}</pre>
    </div>
    <div>Location status: {{$ctrl.locationStatus}}</div>
    <div>
      <pre>Old Url: {{$ctrl.oldUrl}}</pre>
      <pre>New Url: {{$ctrl.newUrl}}</pre>
    </div>
    <ng-view></ng-view>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
