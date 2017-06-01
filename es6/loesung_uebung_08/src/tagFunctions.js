
export function highlight(literals, ...substitutions) {
  // für den String `foo ${'bar'} baz ${'foo2'}`
  // soll folgendes Ergebnis zurückgeliefert werden:
  // [
  //   'foo ',
  //   { text: 'bar', highlight: true },
  //   ' baz ',
  //   { text: 'foo2', highlight: true },
  // ]

  const result = [literals[0]];
  substitutions.forEach((part, i) => {
    result.push({
      text: part,
      highlight: true,
    }, literals[i + 1]);
  });
  return result;
}
