(function() {
  'use strict';

  try {
    undefined(); // TypeError
  } catch (e) {
    console.log('TypeError');
    console.log(e.stack);
  }

  try {
    console.log(variableExistiertNicht); // ReferenceError
  } catch (e) {
    console.log('ReferenceError');
    console.log(e.stack);
  }

  // SyntaxError kann man nicht abfangen
  //  console.log(, 'test'); // SyntaxError

  function returnError() {
    var e = Error('Ein Fehler'); // e ein Errorobjekt
    return e;
  }
  console.log('Ein Fehler');
  console.log(returnError().stack);

  function throwError() {
    var e = Error('Ein Fehler'); // e ein Errorobjekt
    throw e; // Exception
  }

  try {
    throwError();
  } catch (e) {
    console.log('Ein Fehler');
    console.log(e.stack);
  } finally {
    console.log('Ich werde immer aufgerufen!');
  }
})();

