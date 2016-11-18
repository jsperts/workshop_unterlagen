(function () {

  function logInstance(constructor: any): any {
    function newConstructor(...args) {
      console.log('Called:', constructor.name);
      return new constructor(...args);
    }

    // Make sure instanceof still works
    newConstructor.prototype = constructor.prototype;

    return newConstructor;
  }

  @logInstance
  class Foo {
    constructor(public name: string) {
      this.name = name;
    }
  }

  const foo = new Foo('foo');
  const anotherFoo = new Foo('anotherFoo');

  console.log(foo instanceof Foo);
  console.log('Name:', foo.name);
  console.log('Name:', anotherFoo.name);
})();
