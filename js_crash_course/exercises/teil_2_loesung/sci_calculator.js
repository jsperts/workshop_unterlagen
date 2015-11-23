(function(Calculator, calcAPI) {
  'use strict';

  var sciOps = {
    sqrt: function(a) {
      return Math.sqrt(a);
    },
    pow: function(a, b) {
      return Math.pow(a, b);
    },
    min: function(arr) {
      return Math.min.apply(Math, arr);
    },
    max: function(arr) {
      return Math.max.apply(Math, arr);
    }
  };
  var appendTrueOption = {
    append: true
  };

  function SciCalculator(initialDisplay) {
    Calculator.call(this, initialDisplay);
    this.state.maxMinArray = undefined;
  }

  var originalNumFunction = Calculator.prototype.num;

  // Ignoriere Possible strict violation Warnung
  /* jshint -W040 */
  function numForMinMaxMode(num) {
    this.state.first = this.state.first ? this.state.first + num : num;
    calcAPI.print(this.state.first);
  }

  /* jshint +W040 */

  SciCalculator.prototype = Object.create(Calculator.prototype);

  SciCalculator.prototype.resetState = function() {
    Calculator.prototype.resetState.call(this);
    this.state.maxMinArray = undefined;
  };

  SciCalculator.prototype.sqrt = function() {
    var str = 'sqrt(' + this.state.first + ') = ' + sciOps.sqrt(Number(this.state.first));
    calcAPI.print(str);
    this.resetState();
  };

  SciCalculator.prototype.pow = function() {
    this.state.operation = 'pow';
    calcAPI.print(' ^ ', appendTrueOption);
  };

  SciCalculator.prototype.min = function() {
    if (this.state.maxMinArray === undefined) {
      this.state.maxMinArray = [];
      this.state.operation = 'min';
      // min Modus,wir brauchen eine andere num Funktion
      SciCalculator.prototype.num = numForMinMaxMode;
      calcAPI.print('mix(');
    } else {
      this.state.maxMinArray.push(Number(this.state.first));
      this.state.first = undefined;
      var str = 'min(' + this.state.maxMinArray;
      calcAPI.print(str);
    }
  };

  SciCalculator.prototype.max = function() {
    if (this.state.maxMinArray === undefined) {
      this.state.maxMinArray = [];
      this.state.operation = 'max';
      // max Modus,wir brauchen eine andere num Funktion
      SciCalculator.prototype.num = numForMinMaxMode;
      calcAPI.print('max(');
    } else {
      this.state.maxMinArray.push(Number(this.state.first));
      this.state.first = undefined;
      var str = 'max(' + this.state.maxMinArray;
      calcAPI.print(str);
    }
  };

  SciCalculator.prototype.equal = function() {
    if (sciOps[this.state.operation]) {
      var str = '';
      if (this.state.operation === 'max' || this.state.operation === 'min') {
        SciCalculator.prototype.num = originalNumFunction;
        str = ') = ' + sciOps[this.state.operation](this.state.maxMinArray);
      } else {
        str = ' = ' + sciOps[this.state.operation](Number(this.state.first), Number(this.state.second));
      }
      calcAPI.print(str, appendTrueOption);
      this.resetState();
    } else {
      Calculator.prototype.equal.call(this);
    }
  };

  var initiallyDisplay = '0';
  var sciCalc = new SciCalculator(initiallyDisplay);

  // Ueberpruefe, ob SciCalculator richtig instantiiert wurden ist
  if (!(sciCalc instanceof SciCalculator)) {
    throw Error('sciCalc should be instance of SciCalculator');
  }
  if (!(sciCalc instanceof Calculator)) {
    throw Error('sciCalc should have Calculator as a super class');
  }

  calcAPI.setSciCalculatorInstance(sciCalc);
})(window.Calculator, window.calcAPI);
