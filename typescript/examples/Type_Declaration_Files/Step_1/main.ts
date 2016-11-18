/// <reference path="./calculator.d.ts" />

const calc = new Calculator('myCalculator');

console.log(calc.exec('add', 1, 2));
console.log(calc.exec('sub', 1, 3));
console.log(Calculator.getNumberOfInstances());
