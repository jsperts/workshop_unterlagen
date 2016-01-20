export default function myLimit() {
  return function(input, limit) {
    return input.toPrecision(limit);
  }
}

export const name = 'myLimit';
