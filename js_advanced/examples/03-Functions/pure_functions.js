'use strict';

var a = 'test';
var b = 'me';

function pure(a, b) {
  return a + ' ' + b;
}

var pureResult = pure(a, b);

function impure() {
  return a + ' ' + b;
}

var impureResult = impure();


function pure2(arr, element) {
  return [...arr, element];
}

function impure2(arr, element) {
  arr.push(element);
  return arr;
}
