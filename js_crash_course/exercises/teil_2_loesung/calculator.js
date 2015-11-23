(function(calcAPI) {
  'use strict';

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
  var appendTrueOption = {
    append: true
  };

  function Calculator(initialDisplay) {
    this.state = {
      first: undefined,
      second: undefined,
      operation: undefined
    };
    this.initialDisplay = initialDisplay;
  }

  Calculator.prototype.resetState = function() {
    this.state.operation = undefined;
    this.state.first = undefined;
    this.state.second = undefined;
  };

  // num is a string
  Calculator.prototype.num = function(num) {
    // We are inputting the first number
    if (this.state.operation === undefined) {
      this.state.first = this.state.first ? this.state.first + num : num;
      calcAPI.print(this.state.first);
    } else {
      this.state.second = this.state.second ? this.state.second + num : num;
      calcAPI.print(num, appendTrueOption);
    }
  };

  Calculator.prototype.add = function() {
    this.state.operation = 'add';
    calcAPI.print(' + ', appendTrueOption);
  };

  Calculator.prototype.subtract = function() {
    this.state.operation = 'subtract';
    calcAPI.print(' - ', appendTrueOption);
  };

  Calculator.prototype.multiply = function() {
    this.state.operation = 'multiply';
    calcAPI.print(' * ', appendTrueOption);
  };

  Calculator.prototype.divide = function() {
    this.state.operation = 'divide';
    calcAPI.print(' / ', appendTrueOption);
  };

  Calculator.prototype.reset = function() {
    this.resetState();
    calcAPI.print('0');
  };

  Calculator.prototype.equal = function() {
    var str = ' = ' + arithmeticOps[this.state.operation](Number(this.state.first), Number(this.state.second));
    calcAPI.print(str, appendTrueOption);
    this.resetState();
  };

  var initiallyDisplay = '0';
  var calc = new Calculator(initiallyDisplay);
  calcAPI.setCalculatorInstance(calc);

  // Calculator Klasse exportieren
  window.Calculator = Calculator;
})(window.calcAPI);
