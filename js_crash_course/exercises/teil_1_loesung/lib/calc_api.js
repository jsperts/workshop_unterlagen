(function(document) {
  'use strict';

  var clickHandlerElement = document.getElementById('clickHandler');
  var resultsBox = document.getElementById('results');

  var actionsArray = ['num', 'divide', 'multiply', 'subtract', 'add', 'equal', 'reset'];
  var sciActionsArray = ['pow', 'sqrt', 'min', 'max'];
  var actions = {};
  var calcAPI = {};

  clickHandlerElement.addEventListener('click', function(event) {
    var target = event.target;
    var numberAttr = target.getAttribute('data-num');
    var operationAttr = target.getAttribute('data-op');
    var isNumber = numberAttr !== null && numberAttr !== '';
    var isOperation = operationAttr !== null && operationAttr !== '';
    if (isNumber) {
      actions.num(numberAttr);
    } else if (isOperation) {
      var action = actions[operationAttr];
      if (action) {
        action();
      }
    }
  });

  function getActionFunction(action) {
    return function(param) {
      if (action === 'num') {
        console.log('Number:', param);
      } else {
        console.log('Operation:', action);
      }
    };
  }

  function getActionListener(action) {
    return function(cb) {
      actions[action] = cb;
    };
  }

  actionsArray.forEach(function(action) {
    actions[action] = getActionFunction(action);
    calcAPI['set' + action[0].toUpperCase() + action.substr(1) + 'Listener'] = getActionListener(action);
  });

  calcAPI.print = function(str, options) {
    options = options || {};

    if (options.append === true) {
      resultsBox.textContent += str;
    } else {
      resultsBox.textContent = str;
    }
  };

  function getInstanceAction(instance, action) {
    return function() {
      instance[action].apply(instance, arguments);
    };
  }

  calcAPI.setCalculatorInstance = function(cInstance) {
    calcAPI.print(cInstance.initialDisplay);
    actionsArray.forEach(function(action) {
      if (typeof cInstance[action] !== 'function') {
        throw Error('Expected to find function ' + action + ' but was ' + typeof cInstance[action]);
      } else {
        actions[action] = getInstanceAction(cInstance, action);
      }
    });
  };

  calcAPI.setSciCalculatorInstance = function(scInstance) {
    calcAPI.print(scInstance.initialDisplay);
    actionsArray.forEach(function(action) {
      if (typeof scInstance[action] !== 'function') {
        throw Error('Expected to find function ' + action + ' but was ' + typeof scInstance[action]);
      } else {
        actions[action] = getInstanceAction(scInstance, action);
      }
    });
    sciActionsArray.forEach(function(action) {
      if (typeof scInstance[action] !== 'function') {
        throw Error('Expected to find function ' + action + ' but was ' + typeof scInstance[action]);
      } else {
        actions[action] = getInstanceAction(scInstance, action);
      }
    });
  };

  window.calcAPI = calcAPI;
})
(document);
