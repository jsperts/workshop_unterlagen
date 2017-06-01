import {getParam, verifyParams} from './params';
import {square} from './calculation';

import usage from './usage.txt';

function main() {
  if (verifyParams()) {
    let input = getParam();
    let result = square(Number(input));
    console.log('The square of ' + input + " is " + result);
  } else {
    console.error(usage);
  }
}

main();
