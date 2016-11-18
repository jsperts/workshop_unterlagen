(function () {
  function log(isVerbose) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
      const originalValue = descriptor.value;
      descriptor.value = function (...args) {
        console.log('Called:', name, `${isVerbose ? `with ${args}` : ''}`);
        return originalValue.apply(this, args);
      }
    };
  }

  class Foo {
    @log(false)
    static bar(a, b) {
    }

    @log(true)
    foo(a, b) {
    }
  }

  Foo.bar(1, 2);

  const f = new Foo();
  f.foo(1, 2);
})();
