// Boilerplate damit der Code in Node.js und im Browser funktioniert
var globalScope = typeof window !== 'undefined' ? window : global;

a = 'a'; // Variable ist undeklariert und global (funktioniert nicht im strict Modus)
console.log(globalScope.a); // 'a'
var b = 'b'; // Variable ist global im Browser, lokal in Node.js
console.log(globalScope.b); // 'b'

/*
 * Globale Variable in Funktionen
 */
console.log(globalScope.c); // undefined
function foo() {
  c = 'c'; // Variable ist global da c undeklariert (kein var)
}
foo();
console.log(globalScope.c); // 'c'

var d = 'd'; // Variable ist global
function bar() {
  d = 'd2'; // Funktion überschreibt globale Variable
}
console.log(d); // 'd'
bar();
console.log(d); // 'd2'

/*
 * Lokale Variablen in Funktionen
 */
var e = 'e';
function baz() {
  var e = 'e2'; // Variable is lokal
}
console.log(e); // 'e'
baz();
console.log(e); // 'e'

/*
 * Verschachtelte Funktionen
 */
function foobar() {
  var outerVar = 3;
  function foobarNested() {
    var innerVar = 4;
    console.log(outerVar); // 3
  }
  foobarNested();
  console.log(typeof innerVar); // undefined (ohne typeof -> ReferenceError)
}
foobar();

/*
 * Kein Blockscope
 * (gilt auch für Schleifen)
 */
function norf() {
  if (true) {
    var inIf = 'in If';
  }
  console.log(inIf); // 'in If'
}
norf();

/*
 * strict Modus
 */
function qux() {
  'use strict';
  testStrict = 'in strict mode'; // ReferenceError
}
//qux();

/*
 * IIFE (Immediately Invoked Function Expression)
 */
var foo = (function() {
  var a = 'a'; // Lokal
  return a;
})();

console.log(foo); // 'a'

(function(win) {
  var a = 1 + 2 + 3;
  var b = a + a;
  var c = -b;
  win.MEINE_KONSTANTE = c;
})(globalScope);

console.log(globalScope.MEINE_KONSTANTE); // -12

