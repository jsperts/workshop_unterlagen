import process from 'process';

function main() {
  let input = getNumberParam();
  let result = calculate(input);
  console.log('The square of ' + input + " is " + result);
}

function getNumberParam() {
  let param = process.argv[2];
  return Number(param);
}

function calculate(num) {
  return num ** 2;
}

main();
