(function () {
  function logClass(target: any) {
    console.log('Call class');
  }

  function logMethod(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Call method');
  }

  function logParam(target: any, name: string, index: number) {
    console.log('Call param');
  }

  function logConstructorParam(target: any, name: string, index: number) {
    console.log('Call constructor param');
  }

  @logClass
  class Foo {
    constructor(@logConstructorParam a) {}

    @logMethod
    foo(@logParam bar) {}
  }
})();
