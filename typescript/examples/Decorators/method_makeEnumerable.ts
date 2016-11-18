(function() {

  function makeEnumerable(target: any, name: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = true;
    return descriptor;
  }

  class Foo {
    @makeEnumerable
    foo() {}

    bar() {}
  }

  const f = new Foo();

  for (const attr in f) {
    console.log(attr);
  }
})();
