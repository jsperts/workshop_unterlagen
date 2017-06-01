
export function highlight() { // es müssen noch die richtigen Parameter ergänzt werden
  // für den String `foo ${'bar'} baz ${'foo2'}`
  // soll folgendes Ergebnis zurückgeliefert werden:
  // [
  //   'foo ',
  //   { text: 'bar', highlight: true },
  //   ' baz ',
  //   { text: 'foo2', highlight: true },
  // ]
}
