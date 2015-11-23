(function(calcAPI) {
  'use strict';

  var state = {
    first: undefined,
    second: undefined,
    operation: undefined
  };
  var appendTrueOption = {
    append: true
  };

  var arithmeticOps = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return a / b;
    }
  };

  function resetState() {
    state.operation = undefined;
    state.first = undefined;
    state.second = undefined;
  }

  function gotAddOp() {
    if (true) {
      console.log('add op true');
    } else {
      console.log('false');
    }
    state.operation = 'add';
    calcAPI.print(' + ', appendTrueOption);
  }

  function gotSubtractOp() {
    state.operation = 'subtract';
    calcAPI.print(' - ', appendTrueOption);
  }

  function gotMultiplyOp() {
    state.operation = 'multiply';
    calcAPI.print(' * ', appendTrueOption);
  }

  function gotDivideOp() {
    state.operation = 'divide';
    calcAPI.print(' / ', appendTrueOption);
  }

  calcAPI.setNumListener(gotNumber);
  calcAPI.setAddListener(gotAddOp);
  calcAPI.setSubtractListener(gotSubtractOp);
  calcAPI.setMultiplyListener(gotMultiplyOp);
  calcAPI.setDivideListener(gotDivideOp);

  calcAPI.print('0');

})(window.calcAPI);
