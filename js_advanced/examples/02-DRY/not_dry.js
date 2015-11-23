(function(document) {
  'use strict';

  var canvas = document.getElementById('notDry');
  var ctx = canvas.getContext('2d');

  ctx.lineWidth = 4;

  // Oben
  ctx.beginPath();
  ctx.moveTo(24, 24);
  ctx.lineTo(174, 24);
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.closePath();

  // Rechts
  ctx.beginPath();
  ctx.moveTo(172, 26);
  ctx.lineTo(172, 72);
  ctx.strokeStyle = '#d11111';
  ctx.stroke();
  ctx.closePath();

  // Unten
  ctx.beginPath();
  ctx.moveTo(174, 74);
  ctx.lineTo(24, 74);
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.closePath();

  // Links
  ctx.beginPath();
  ctx.moveTo(26, 72);
  ctx.lineTo(26, 26);
  ctx.strokeStyle = '#d11111';
  ctx.stroke();
  ctx.closePath();

})(document);

