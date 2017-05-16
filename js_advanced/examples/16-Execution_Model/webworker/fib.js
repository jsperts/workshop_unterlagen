(function () {
  function calc(n) {
    if (n <= 2) {
      return 1;
    }
    return calc(n - 1) + calc(n - 2);
  }

  function calcSequence(n) {
    var fibs = [];
    for (var i = 1; i <= n; i++) {
      fibs.push(calc(i));
    }
    return fibs;
  }

  // Get data from main script
  onmessage = function (event) {
    var res = calcSequence(event.data);
    // Pass data to main script
    postMessage(res);
  };
})();
