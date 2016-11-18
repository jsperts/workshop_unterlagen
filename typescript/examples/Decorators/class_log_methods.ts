(function () {

  function logMethods(target: Function) {
    const keys = Object.keys(target.prototype);

    keys.forEach((key) => {
      const original = target.prototype[key];
      target.prototype[key] = function () {
        console.log('Called:', key);
        original.call(this, arguments);
      };
    });
  }

  @logMethods
  class Foo {
    bar() {}
  }

  var foo = new Foo();
  foo.bar();
})();
