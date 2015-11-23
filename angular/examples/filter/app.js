(function(angular) {
  var mod = angular.module('filtersTestApp', []);

  mod.filter('myLimit', function() {
    return function(input, limit) {
      return input.toPrecision(limit);
    };
  });

  mod.controller('MainCtrl', function($filter) {
    this.text = 'Ich Bin Ein Text';
    this.array = [{name: 'Max'}, {name: 'John'}, {name: 'Mike'}, {name: 'Bert'}];
    this.myNumber = 1.22;
    this.myFilteredNumber = $filter('myLimit')(this.myNumber, 2);
  });

})(angular);
