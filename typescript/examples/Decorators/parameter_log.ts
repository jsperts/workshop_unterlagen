(function() {

  function log(target: any, propertyName: string, index: number) {
    console.log('Method', propertyName, 'has', index + 1, 'parameters');
  }

  class Foo {
    foo(f, b, @log bar) {}
  }
})();
