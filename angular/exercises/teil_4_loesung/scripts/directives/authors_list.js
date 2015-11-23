(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var directiveName = 'authorsList';

  function authorsList() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'templates/authors_list.html',
      controller: 'AuthorsListCtrl',
      controllerAs: 'authorsCtrl',
      link: function(scope, elem, attrs, ctrl) {
        elem.bind('click', function(event) {
          var path = event.target.dataset.link;
          scope.$apply(function() {
            ctrl.navigate(path);
          });
        });
      }
    };
  }
  authorsList.$inject = [];

  mod.directive(directiveName, authorsList);
})(angular, window.MY_APP_MODULE_NAME);
