(function() {

  function log(target: any, name: string): any {
    console.log('Applied on', name);
  }

  class Foo {
    @log
    foo = 'foo';
  }

  const foo = new Foo();

})();
