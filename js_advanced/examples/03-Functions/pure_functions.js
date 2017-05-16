'use strict';

var a = 'test';
var b = 'me';

function impure() {
  return a + ' ' + b;
}

var impureResult = impure();

function pure(a, b) {
  return a + ' ' + b;
}

var pureResult = pure(a, b);


function impure2(arr, element) {
  arr.push(element);
  return arr;
}

function pure2(arr, element) {
  return [...arr, element];
}

var values = ['a', 'b', 'c'];
var valuesImpureResult = impure2(values, 'd');
var valuesPureResult = pure2(values, 'e');

console.log('impureResult', impureResult);
console.log('pureResult', pureResult);
console.log('impure2', valuesImpureResult);
console.log('pure2', valuesPureResult);
console.log('values', values);
