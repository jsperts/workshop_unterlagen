(function() {
  'use strict';

  /*
   * Deklaration und Zuweisung wird aufgespalltet
   */
  function foo() {
    console.log(a); // undefined
    var a = 1;
  }

  // Die Funktion foo so wie die JavaScript engine sie sieht
  /*
   * function foo() {
   *   var a;
   *   console.log(a);
   *   a = 1;
   * }
   */

  /*
   * Funktionsdeklaration und Funktionsausdruck
   */
  // Funktionsdeklaration wird hoch gezogen
  function bar() {
    console.log(baz()); // 2
    function baz() {
      return 2;
    }
  }

  // Die Funktion bar so wie die JavaScript engine sie sieht
  /*
   * function bar() {
   *   function baz() {
   *     return 2;
   *   }
   *   console.log(baz());
   * }
   */

  // Funktionsausdruck wird aufgespallten
  function baz() {
    console.log(typeof foobar); // 'undefined'
    var foobar = function() {};
    console.log(typeof foobar); // 'function'
  }

  // Die Funktion baz so wie die JavaScript engine sie sieht
  /*
   * function baz() {
   *   var foobar;
   *   console.log(typeof foobar);
   *   foobar = function () {}
   *   console.log(typeof foobar);
   * }
   */
})();

