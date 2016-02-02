(function(window) {
  'use strict';
  var perf = window.performance;

  // Fibonacci no memoization
  function noMemoization(n) {
    if (n <= 2) {
      return 1;
    } else {
      return noMemoization(n-1) + noMemoization(n-2);
    }
  }

  // Fibonacci with memoization
  function memoization(n) {
    if (n <= 2) {
      return 1;
    } else if (memoization.cache[n]) {
      return memoization.cache[n];
    } else {
      var result = memoization(n-1) + memoization(n-2);
      memoization.cache[n] = result;
      return result;
    }
  }
  memoization.cache = [1, 1, 1];

  window.m = {
    noMemoization: noMemoization,
    memoization: memoization
  }
})(window);