'use strict';

function foo(x) {
  // War wirklich diese Überprüfung gewollt? Oder wollte man nur x === null überprüfen?
  if (x === null || x === undefined) {
    console.log('X is null');
  }
}


var a = 2 * 2;
console.log(a);

var b = '2';
var c = 3 + Number(b);
console.log(c);

// ACHTUNG: ~~ funktioniert nur für positive Zahlen wie Math.floor
var d = Math.floor(9.5);
console.log(d);

// ARRAYS
var arr = [];

// "arr" Elemente werden wahrscheinlich veraendert
arr.forEach(function(){});

// "arr1" hat gleiche Laenge wie "arr" aber die Elemente sind wahrscheinlich veraendert
var arr1 = arr.map(function(){});

// "arr2" ist wahrscheinlich kuerzer als "arr"
var arr2 = arr.filter(function(){});