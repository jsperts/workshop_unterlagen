(function(Calculator, calcAPI) {
  'use strict';

  function SciCalculator(initialDisplay) {
    // TODO: super-Konstruktor aufrufen
  }

  /*
   * SciCalculator ist eine Subklasse von Calculator
   * Der Prototyp von SciCalculator hat folgende zusätliche Methoden
   * sqrt, pow, min, max
   */
  // JavaScript hat die Methoden sqrt, pow, min, max: Mehr Informationen: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math

  // TODO Prototyp von SciCalculator definieren

  /*
   * Wird aufgerufen wenn der 'sqrt'-Button geklickt wird
   * Die Methode wird ohne Parameter aufgerufen
   */
  SciCalculator.prototype.sqrt = function() {};

  /*
   * Wird aufgerufen wenn der 'pow'-Button geklickt wird
   * Die Methode wird ohne Parameter aufgerufen
   */
  SciCalculator.prototype.pow = function() {};

  /*
   * Wird aufgerufen wenn der 'min'-Button geklickt wird
   * Die Methode wird ohne Parameter aufgerufen
   */
  SciCalculator.prototype.min = function() {};

  /*
   * Wird aufgerufen wenn der 'max'-Button geklickt wird
   * Die Methode wird ohne Parameter aufgerufen
   */
  SciCalculator.prototype.max = function() {};

  var initiallyDisplay = '0';
  // Instanzerzeugen
  var sciCalc = new SciCalculator(initiallyDisplay);

  // Ueberpruefe, ob SciCalculator richtig instantiiert wurden ist
  if (!(sciCalc instanceof SciCalculator)) {
    throw Error('sciCalc should be instance of SciCalculator');
  }
  if (!(sciCalc instanceof Calculator)) {
    throw Error('sciCalc should have Calculator as a super class');
  }

  // Instanz der API übergeben
  calcAPI.setSciCalculatorInstance(sciCalc);
})(window.Calculator, window.calcAPI);
