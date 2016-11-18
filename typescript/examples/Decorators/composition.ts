(function() {
  function first() {
    console.log('Evaluate first');
    return function(target: any) {
      console.log('Call first');
    };
  }

  function second() {
    console.log('Evaluate second');
    return function(target: any) {
      console.log('Call second');
    }
  }

  @first()
  @second()
  class Foo {}
})();
