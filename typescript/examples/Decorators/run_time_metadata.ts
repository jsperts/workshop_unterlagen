/// <reference path="./vendor/Reflect.d.ts" />
(function() {

  const key = 'paramTypes';

  function validate(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      const paramTypes = Reflect.getOwnMetadata(key, target, name);
      if (paramTypes) {
        paramTypes.forEach(({index, type}) => {
          if (typeof args[index] !== type) {
            throw new Error('Types do not match. Expected ' + type);
          }
        });
      }
      originalMethod.apply(this, args);
    }
  }

  function type(target: any, propertyName: string, index: number, type: string) {
    const paramTypes = Reflect.getOwnMetadata(key, target, propertyName) || [];
    paramTypes.push({
      index,
      type,
    });
    Reflect.defineMetadata(key, paramTypes, target, propertyName);
  }

  function string(target: any, propertyName: string, index: number) {
    type(target, propertyName, index, 'string');
  }

  function number(target: any, propertyName: string, index: number) {
    type(target, propertyName, index, 'number');
  }

  class Foo {
    @validate
    foo(@number a, @string b) {}
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
