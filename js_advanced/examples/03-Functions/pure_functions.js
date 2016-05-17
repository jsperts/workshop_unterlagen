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
  var newArr = arr.map(function(elem) {
    return elem;
  });
  newArr.push(element);
  return newArr;
}

function pure2Alternativ(arr, element) {
  var newArr = arr.slice();
  newArr.push(element);
  return newArr;
}


function impure2(arr, element) {
  arr.push(element);
  return arr;
}
