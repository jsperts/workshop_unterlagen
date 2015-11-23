(function() {
  'use strict';

  // RegExp definition
  var re1 = /a/; // RegExp Literal
  console.log('typeof', typeof re1);

  var re2 = RegExp('a'); // Funktion
  console.log('typeof', typeof re2);

  /ab/.test('ab'); // true
  /a/.test('bb'); // false

  /a/.test('aa'); // true
  /ab/.test('ba'); // false

  // Wiederholung mit *
  /ba*b/.test('baab'); // true
  /ba*b/.test('bb'); // true

  // Wiederholung mit +
  /ba+b/.test('baab'); // true
  /ba+b/.test('bb'); // false

  // 0 oder 1 Charakter
  /ba?b/.test('bab'); // true
  /ba?b/.test('bb'); // true
  /ba?b/.test('baab'); // false

  // Escaping
  /\+/.test('aab+c'); // true
  /\+/.test('aabc'); // true

  //  /+/.test('aabc'); // SyntaxError

  // Charaktermengen
  /\d/.test('B2B'); // true
  /\d/.test('blabla'); // false

  /\s/.test('a\t bc'); // true
  /\s/.test('abc'); // false

  /[abc]/.test('ade'); // true
  /[abc]/.test('def'); // false

  /./.test('124s'); // true
  /./.test('\r\n'); // false
})();

