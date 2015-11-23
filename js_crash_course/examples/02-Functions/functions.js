(function() {
  'use strict'; // strict Modus aktiviert

  /*
   * Der typeof-Operator mit Funktionen
   */
  // Funktionsdeklaration
  function meineFunktion1() {}
  console.log(typeof meineFunktion1); // 'function'

  // Funktionsausdruck
  // Die Variable "meineFunktion2" ist eine Referenze zu eine anonyme Funktion
  var meineFunktion2 = function() {};
  console.log(typeof meineFunktion2); // 'function'

  /*
   * Aufruf mit weniger Argumente als die Anzahl von Parametern
   */
  function foo(param1, param2) {
    console.log(param1); // 1
    console.log(param2); // undefined
    console.log(arguments.length); // 1
    console.log(arguments[0]); // 1 (das ist param1)
    console.log(arguments[1]); // undefined
  }

  console.log(foo.length); // 2
  // Funktion erwartet 2 Parameter, wird aber nur mit einem Argument aufgerufen
  foo(1);

  /*
   * Aufruf mit mehr Argumente als die Anzahl von Parameter
   */
  function baz(param1) {
    console.log(param1); // 1
    console.log(arguments.length); // 2
    console.log(arguments[0]); // 1 (das ist param1)
    console.log(arguments[1]); // 2
  }

  console.log(baz.length); // 1
  // Funktion erwartet 1 Parameter, wird aber mit 2 Argumente aufgerufen
  baz(1, 2);

  /*
   * Funktionen mir Rückgabewert
   */
  function bar1() {
    // Implizit return undefined
  }

  function bar2() {
    return; // Implizit return undefined
  }

  function bar3() {
    return 2;
  }
  var retBar = bar1();
  console.log(retBar); // undefined
  retBar = bar2();
  console.log(retBar); // undefined
  retBar = bar3();
  console.log(retBar); // 2

  /*
   * Aufruf mit Objekte
   */
  var obj = {
    a: 'a'
  };
  // Objekt wird modifiziert
  function foobar(obj) {
    obj.a = 'b';
  }
  foobar(obj);
  console.log(obj.a); // 'b'

  // Objekt wird ersetzt
  function norf(obj) {
    obj = {};
    obj.a = 'c';
  }
  norf(obj);
  console.log(obj.a); // 'b'

  /*
   * Aufruf mit default Parameter
   */
  function qux(param1) {
    // Achtung: Wenn param1 falsy ist, wird bla 0 sein
    var bla = param1 || 0;
    return bla;
  }
  var retQux = qux(1); // truthy Argument
  console.log(retQux); // 1
  retQux = qux();      // falsy Argument, implizites undefined
  console.log(retQux); // 0

  /*
   * return und Rückgabewert müssen in der selbe Zeile sein
   */
  function quux() {
    return
    2;
  }
  console.log(quux); // undefined

  // Die Funktion quux so wie die JavaScript engine sie sieht
  /*
   * function quux() {
   *   return; // Semikolon automatisch eingesetzt!
   *   2;
   * }
   */
})();

