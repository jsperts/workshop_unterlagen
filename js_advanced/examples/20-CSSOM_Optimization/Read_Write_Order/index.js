(function() {
  'use strict';

  var boxes = document.getElementsByClassName('box');
  var box1 = boxes[0];
  var box2 = boxes[1];
  var box3 = boxes[2];

  var orderedReadWrite = document.getElementById('orderedReadWrite');
  var mixedReadWrite = document.getElementById('mixedReadWrite');
  var mixedReadWriteLoop = document.getElementById('mixedReadWriteLoop');
  var orderedReadWriteLoop = document.getElementById('orderedReadWriteLoop');

  mixedReadWrite.addEventListener('click', function() {
    // read
    var heightBox1 = box1.clientHeight;

    // write
    box1.style.height = heightBox1 + 20 + 'px';

    // read
    var heightBox2 = box2.clientHeight;

    // write
    box2.style.height = heightBox2 + 20 + 'px';

    // read
    var heightBox3 = box3.clientHeight;

    // write
    box3.style.height = heightBox3 + 20 + 'px';
  });

  orderedReadWrite.addEventListener('click', function() {
    // read
    var heightBox1 = box1.clientHeight;
    var heightBox2 = box2.clientHeight;
    var heightBox3 = box3.clientHeight;

    // write
    box1.style.height = heightBox1 + 20 + 'px';
    box2.style.height = heightBox2 + 20 + 'px';
    box3.style.height = heightBox3 + 20 + 'px';
  });

  mixedReadWriteLoop.addEventListener('click', function() {
    [].forEach.call(boxes, function(box) {
      var height = box.clientHeight;
      box.style.height = height + 20 + 'px';
    });
  });

  orderedReadWriteLoop.addEventListener('click', function() {
    [].forEach.call(boxes, function(box) {
      var height = box.clientHeight;
      window.requestAnimationFrame(function() {
        box.style.height = height + 20 + 'px';
      });
    });
  });
})();