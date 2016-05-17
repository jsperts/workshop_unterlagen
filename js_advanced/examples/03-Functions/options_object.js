'use strict';

function rgbToHex(red, green, blue, alpha) {
  var redGreen = red.toString(16) + green.toString(16);
  var blueAlpha = blue.toString(16) + alpha.toString(16);
  return '#' +  redGreen + blueAlpha;
}

rgbToHex(255, 255, 255, 0);


function rgbToHex2(options) {
  var redGreen = options.red.toString(16) + options.green.toString(16);
  var blueAlpha = options.blue.toString(16) + options.alpha.toString(16);
  return '#' +  redGreen + blueAlpha;
}

var options = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 255
};
rgbToHex2(options);
