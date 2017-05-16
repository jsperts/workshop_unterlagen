'use strict';

function foo(x) {
  // Wann wird die log-Funktion aufgerufen?
  if (x == null) {
    console.log('X is null');
  }
}

// Was passiert hier? Was ist der Wert von a?
var a = 2 << 1;
console.log(a);

// Was passiert hier? Was ist der Wert von c?
var b = '2';
var c = 3 + +b;
console.log(c);

// Was passiert hier? Was ist der Wert von d?
var d = ~~9.5;
console.log(d);

// ARRAYS
var arr = [];

// for-Schleife kann alles machen
// Einzelne Elemente verändern, die Länge verändern etc.
for (var i = 0; i < arr.length; i++) {}
