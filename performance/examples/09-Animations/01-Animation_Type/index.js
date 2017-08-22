(function () {
  'use strict';

  var translateMove = document.getElementById('translateMove');
  var manualMove = document.getElementById('manualMove');
  var jsMove = document.getElementById('jsMove');

  translateMove.addEventListener('click', function () {
    // classList erst ab IE10 bzw. android 4.1 (und auch da funktioniert nicht alles)
    document.getElementById('translateMoveBox').classList.add('box-move');
  });

  manualMove.addEventListener('click', function () {
    document.getElementById('manualMoveBox').classList.add('box-manual-move');
  });

  jsMove.addEventListener('click', function () {
    var box = document.getElementById('jsMoveBox');
    box.style.position = 'relative';

    var time = 2000; // 2s
    var start;

    function move(timestamp) {
      if (!start) {
        start = timestamp;
      }
      var progress = timestamp - start;
      box.style.left = Math.min(progress / 10, 160) + 'px';
      if (progress < time) {
        requestAnimationFrame(move);
      } else {
        requestAnimationFrame(function () {
          box.style.left = 0;
        });
      }
    }

    requestAnimationFrame(move);
  });
})();
