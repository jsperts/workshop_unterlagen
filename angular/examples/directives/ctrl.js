(function(angular) {
  'use strict';

  var mod = angular.module('ctrlDirectiveTestApp', []);

  function MainCtrl() {
    this.color = '';
  }

  function colorPicker() {
    return {
      restrict: 'E',
      controller: 'ColorPickerCtrl',
      controllerAs: 'picker',
      bindToController: { // bindToController mit Objekt erst ab AngularJS 1.4.x
        color: '=gtsColor'
      },
      scope: {
        color: '=gtsColor'
      },
      templateUrl: './color_picker_template.html',
      link: function(scope, element, attrs, ctrl) {
        console.log(ctrl);
      }
    };
  }

  function ColorPickerCtrl($element, $attrs) { // Optionale Parameter
    this.open = false;
    this.openSelector = function() {
      this.open = true;
    };
    this.closeSelector = function() {
      this.open = false;
    };
    this.selectColor = function(color) {
      this.color = color;
    }
  }

  ColorPickerCtrl.$inject = ['$element', '$attrs'];

  mod.controller('ColorPickerCtrl', ColorPickerCtrl);
  mod.directive('gtsColorPicker', colorPicker);
  mod.controller('MainCtrl', MainCtrl);
})(angular);

/*
 * AngularJS 1.3.x Schreibweise
 */
/*(function(angular) {
  'use strict';

  var mod = angular.module('ctrlDirectiveTestApp', []);

  function MainCtrl() {
    this.color = '';
  }

  function colorPicker() {
    return {
      restrict: 'E',
      controller: 'ColorPickerCtrl',
      controllerAs: 'picker',
      bindToController: true, // Achtung: scope hat kein Zugriff mehr auf die Eigenschaft color
      scope: {
        color: '=gtsColor'
      },
      templateUrl: './color_picker_template.html',
      link: function(scope, element, attrs, ctrl) {
        console.log(ctrl);
      }
    };
  }

  function ColorPickerCtrl($element, $attrs) { // Optionale Parameter
    this.open = false;
    this.openSelector = function() {
      this.open = true;
    };
    this.closeSelector = function() {
      this.open = false;
    };
    this.selectColor = function(color) {
      this.color = color;
    }
  }

  ColorPickerCtrl.$inject = ['$element', '$attrs'];

  mod.controller('ColorPickerCtrl', ColorPickerCtrl);
  mod.directive('gtsColorPicker', colorPicker);
  mod.controller('MainCtrl', MainCtrl);
})(angular);*/
