import {getParam, verifyParams} from './params';
import {square} from './calculation';

function main() {
  if (verifyParams()) {
    let input = getParam();
    let result = square(Number(input));
    console.log('The square of ' + input + " is " + result);
  } else {
    console.error('Falsche Parameter!');
  }
}

main();
