(function(calcAPI) {
  'use strict';

  function Calculator(initialDisplay) {
    this.initialDisplay = initialDisplay;
  }

  /*
   * Der Calculator-Prototyp soll folgende Methoden haben
   * num, divide, multiply, subtract, add, equal, reset
   * Die Signatur der Methoden ist die gleiche wie die Signatur der Funktionen vom ersten Teil
   */

  var initiallyDisplay = '0';
  // Instanzerzeugen
  var calc = new Calculator(initiallyDisplay);
  // Instanz der API übergeben
  calcAPI.setCalculatorInstance(calc);

  // Calculator Klasse exportieren
  window.Calculator = Calculator;
})(window.calcAPI);
