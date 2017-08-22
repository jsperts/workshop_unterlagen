(function () {
  'use strict';

  var canvas = document.getElementById('dry');
  var ctx = canvas.getContext('2d');

  ctx.lineWidth = 4;

  function drawLine(startX, startY, endX, endY, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }

  // Oben
  drawLine(24, 24, 174, 24, '#000000');
  // Rechts
  drawLine(172, 26, 172, 72, '#d11111');
  // Unten
  drawLine(174, 74, 24, 74, '#000000');
  // Links
  drawLine(26, 72, 26, 26, '#d11111');
})(document);
