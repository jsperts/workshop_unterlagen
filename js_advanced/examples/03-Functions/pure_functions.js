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
  var newArr = [];
  // var newArr = arr.slice() könnte man auch nutzen
  arr.forEach(function(elem) {
    newArr.push(elem);
  });
  newArr.push(element);
  return newArr;
}


function impure2(arr, element) {
  arr.push(element);
  return arr;
}
