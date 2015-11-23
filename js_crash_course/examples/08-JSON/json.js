(function() {
  'use strict';

  /*
   * Objekt mit Number, String, Boolean, Array, null und Object
   */
  var obj1 = {
    number: 1,
    string: 'I am a string',
    bool: true,
    zero: null,
    arr: [1, false, "string", null, {a: 1}],
    obj: {
      string: 'I am also a string!',
      number: 1.0
    }
  };

  var json1 = JSON.stringify(obj1);

  /* Resultat
  '{
    "number":1,
    "string":"I am a string",
    "bool":true,
    "zero":null,
    "arr":[
      1,
      false,
      "string",
      null,
      { "a":1 }
    ],
    "obj":{
      "string":"I am also a string!",
      "number":1
    }
  }'
  */

  JSON.parse(json1); // Gibt zurueck ein Objekt was wie obj1 aussieht

  /*
   * Objekt mit Funktionen
   */
  var obj2 = {
    fn: function() {},
    arr: [function() {}]
  };

  JSON.stringify(obj2); // '{"arr":[null]}'

  /*
   * Objekt mit undefined
   */
  var obj3 = {
    undef: undefined,
    arr: [undefined]
  };

  JSON.stringify(obj3); // '{"arr": [null]}'

  /*
   * JSON.parse mit ungültigen JSON
   */
  var invalidJSON = '{"fn": function(){}}';

  JSON.parse(invalidJSON); // SyntaxError
})();

