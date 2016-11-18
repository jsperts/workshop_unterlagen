(function() {

  function log(target: any, name: string): any {
    let val;
    return {
      enumerable: true,
      configurable: true,
      set(v) {
        console.log('Setting', name);
        val = v;
      },
      get() {
        console.log('Getting', name);
        return val;
      },
    };
  }

  class Foo {
    @log
    foo = 'foo';
  }

  const foo = new Foo();
  console.log('Value:', foo.foo);
  foo.foo = 'bar';
  console.log('Value:', foo.foo);
})();
