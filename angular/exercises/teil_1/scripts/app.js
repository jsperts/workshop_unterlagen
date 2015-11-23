(function(angular) {
  'use strict';

  // TODO: use this name with ng-app
  var moduleName = 'authorsApp';

  // Define new module
  angular.module(moduleName, []);

  // Make module name globally available so we can use it in the controller
  // to get to the module
  window.MY_APP_MODULE_NAME = moduleName;
})(angular);
