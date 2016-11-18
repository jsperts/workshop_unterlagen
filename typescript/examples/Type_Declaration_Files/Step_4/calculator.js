Calculator = (function() {

  function Calculator(instanceName) {
    Calculator.numberOfInstances++;
  }

  Calculator.numberOfInstances = 0;
  Calculator.getNumberOfInstances = function() {
    return this.numberOfInstances;
  };

  Calculator.prototype.add = function(a, b) {
    return a + b;
  };

  Calculator.prototype.sub = function(a, b) {
    return a - b;
  };

  Calculator.prototype.exec = function(op, a, b) {
    if (op === 'add') {
      return this.add(a, b);
    } else {
      return this.sub(a, b);
    }
  };

  return Calculator;
})();
