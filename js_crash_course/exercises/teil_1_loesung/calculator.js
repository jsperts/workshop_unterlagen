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

  // num is a string
  function gotNumber(num) {
    // We are inputting the first number
    if (state.operation === undefined) {
      state.first = state.first ? state.first + num : num;
      calcAPI.print(state.first);
    } else {
      state.second = state.second ? state.second + num : num;
      calcAPI.print(num, appendTrueOption);
    }
  }

  function gotAddOp() {
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

  function gotResetOp() {
    resetState();
    calcAPI.print('0');
  }

  function gotEqualOp() {
    var str = ' = ' + arithmeticOps[state.operation](Number(state.first), Number(state.second));
    calcAPI.print(str, appendTrueOption);
    resetState();
  }

  calcAPI.setNumListener(gotNumber);
  calcAPI.setAddListener(gotAddOp);
  calcAPI.setSubtractListener(gotSubtractOp);
  calcAPI.setMultiplyListener(gotMultiplyOp);
  calcAPI.setDivideListener(gotDivideOp);
  calcAPI.setResetListener(gotResetOp);
  calcAPI.setEqualListener(gotEqualOp);

  calcAPI.print('0');

})(window.calcAPI);
