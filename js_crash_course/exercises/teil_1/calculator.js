(function(calcAPI) {
  'use strict';

  /*
   * Wird aufgerufen wenn ein Button mit einer Zahl geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird mit einem String aufgerufen, der die geclickte Zahl representiert
   */
  calcAPI.setNumListener();

  /*
   * Wird aufgerufen wenn der '+'-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setAddListener();

  /*
   * Wird aufgerufen wenn der '-'-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setSubtractListener();

  /*
   * Wird aufgerufen wenn der '*'-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setMultiplyListener();

  /*
   * Wird aufgerufen wenn der '/'-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setDivideListener();

  /*
   * Wird aufgerufen wenn der 'C'-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setResetListener();

  /*
   * Wird aufgerufen wenn der '='-Button geklickt wird
   * Erwartet eine Callback-Funktion als Parameter
   * Die Callback-Funktion wird ohne Parameter aufgerufen
   */
  calcAPI.setEqualListener();

  // Initial soll eine Null angezeigt werden
  calcAPI.print('0');

  /*
   * calcAPI.print()-Funktion
   * Erwartet ein String und ein optionalen Parameter vom Typ Object
   */

})(window.calcAPI);
