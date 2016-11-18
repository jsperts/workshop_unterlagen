(function() {

  function log(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalSetter = descriptor.set;
    const originalGetter = descriptor.get;

    descriptor.set = function(arg) {
      console.log('Setting', name);
      originalSetter.call(this, arg);
    };

    descriptor.get = function() {
      console.log('Getting', name);
      return originalGetter.call(this);
    };
  }

  class Foo {
    private _foo = 'foobar';

    @log
    get foo() {
      return this._foo;
    }

    set foo(value) {
      this._foo = value;
    }
  }

  const foo = new Foo();
  console.log('Value:', foo.foo);
  foo.foo = 'bar';
  console.log('Value:', foo.foo);
})();
