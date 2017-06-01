import process from 'process';

function main() {
  let input = getParam();
  let result = calculate(Number(input));
  console.log('The square of ' + input + " is " + result);
}

function getParam() {
  return process.argv[2];
}

function calculate(num) {
  return num ** 2;
}

main();
