'use strict';

function rgbaToHex(red, green, blue, alpha) {
  var redGreen = red.toString(16) + green.toString(16);
  var blueAlpha = blue.toString(16) + alpha.toString(16);
  return '#' + redGreen + blueAlpha;
}

var result1 = rgbaToHex(255, 255, 255, 0);

function rgbaToHex2(options) {
  var red = options.red;
  var green = options.green;
  var blue = options.blue;
  var alpha = options.alpha;
  var redGreen = red.toString(16) + green.toString(16);
  var blueAlpha = blue.toString(16) + alpha.toString(16);
  return '#' + redGreen + blueAlpha;
}

var options = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 0,
};
var result2 = rgbaToHex2(options);

function rgbaToHex3({ red, green, blue, alpha }) {
  var redGreen = red.toString(16) + green.toString(16);
  var blueAlpha = blue.toString(16) + alpha.toString(16);
  return '#' + redGreen + blueAlpha;
}

var red = 255;
var green = 255;
var blue = 255;
var alpha = 0;
var result3 = rgbaToHex2({ red, green, blue, alpha });

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
