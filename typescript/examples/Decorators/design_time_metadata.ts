(function() {
  function validate(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      const paramCtorFunctions = Reflect.getOwnMetadata('design:paramtypes', target, name);
      if (paramCtorFunctions) {
        paramCtorFunctions.forEach((ctorFn, i) => {
          // Careful "name" only works in ES6 browsers
          if (ctorFn.name.toLowerCase() !== typeof args[i]) {
            throw new Error('Types do not match. Expected ' + ctorFn.name);
          }
        });
      }
      originalMethod.apply(this, args);
    }
  }

  class Foo {
    @validate
    foo(a: number, b: string) {}
  }

  const f = new Foo();

  try {
    f.foo(1, 'a');
  } catch (e) {
    console.log('Error', e);
  }

  try {
    f.foo('a', 'a');
  } catch (e) {
    console.log('Error', e);
  }

  try {
    f.foo(1, 2);
  } catch (e) {
    console.log('Error', e);
  }
})();
