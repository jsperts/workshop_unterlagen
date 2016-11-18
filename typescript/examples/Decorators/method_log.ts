(function() {

  function log(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalValue = descriptor.value;
    const isStatic = typeof target === 'function';
    descriptor.value = function(...args) {
      console.log('Called:', `${isStatic ? 'static' : ''} ${name}`);
      return originalValue.apply(this, args);
    }
  }

  class Foo {
    @log
    static bar() {}

    @log
    foo() {}
  }

  Foo.bar();
  const foo = new Foo();
  foo.foo();
})();
