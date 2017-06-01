var process = require('process');

function main() {
  var input = getNumberParam();
  var result = calculate(input);
  console.log('The square of ' + input + " is " + result);
}

function getNumberParam() {
  var param = proces.argv[2];
  var paramNumber = Number(param)
  return paramNumber;
}

function calculate(num) {
  return num**2;
}

main();
