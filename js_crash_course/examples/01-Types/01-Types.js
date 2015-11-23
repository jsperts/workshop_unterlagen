/*
 * This file can not directly be run in the browser or Node.js
 */

/*
 * Implizite Typumwandlung
 */

// ==
'0' == false; // true '0' ist truthy
'1' == true;  // true
'2' == true;  // false

// <
// Relationale Operatoren: Wenn nicht beide Operatoren von Typ string sind, werden beide in eine Zahl
'5' < 'l'; // true
5 < 'l';   // false
'6' > 5    // true

// Arithmetische Operationen: Achten auf NaN bei der Typumwandlung
// +
2 + 3 + '5';   // '55'
'5' + 2 + 3;   // '523'
true + 3;      // 4
3 + {};        // '3[object Object]'
undefined + 5; // NaN

// *
5 * '5';  // 25
({}) * 5; // NaN

// ||
2 || 3; // 2
0 || 3; // 3

// &&
2 && 4; // 4
0 && 4; // 0

/*
 * Explizite Typumwandlung
 */
// falsy Werte
Boolean('');        // false
Boolean(0);         // false
Boolean(NaN);       // false
Boolean(undefined); // false
Boolean(null);      // false
Boolean(false);     // false

// truthy Werte (paar Beispiele)
Boolean({});   // true
Boolean([]);   // true
Boolean('  '); // true
Boolean('0');  // true
Boolean(10);   // true
Boolean(true); // true

// Number
Number(undefined);  // NaN
Number(null);       // 0
Number('5t');       // true
parseInt('5t', 10); // 5 Achtung radix

// String
String(NaN); // 'NaN'
String({});  // '[object Object]' selbe wie ({}).toString()

