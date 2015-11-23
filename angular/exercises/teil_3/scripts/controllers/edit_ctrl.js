(function(angular, moduleName) {
  'use strict';

  var mod = angular.module(moduleName);

  var ctrlName = 'EditCtrl';

  function EditCtrl(dataService) {
    // HINT: using the $routeParams service you can get the id from the URL
    var self = this;
  }
  EditCtrl.$inject = ['DataService'];

  mod.controller(ctrlName, EditCtrl);
})(angular, window.MY_APP_MODULE_NAME);
