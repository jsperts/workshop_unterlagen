console.log('Übung 02: Block Scope START');

function createPrintFunctions(num) {
  var printFns = [];

  for(var i = 1; i <= num; i++) {
    printFns.push(function() {
      var str = 'String: ' + i;
      return str;
    });
  }

  return printFns;
}

const printFns = createPrintFunctions(5);

for(var i = 0; i < printFns.length; i++) {
  console.log(printFns[i]());
}

// Erwartetes Ergebnis
/*
 * String: 1
 * String: 2
 * String: 3
 * String: 4
 * String: 5
 */

console.log('Übung 02: Block Scope DONE');
