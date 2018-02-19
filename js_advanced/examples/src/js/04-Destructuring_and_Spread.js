console.log('Übung 04: Destructuring und Spread START');

// Die Funktion mit Hilfe von Destructuring vereinfachen
function calculateDistance(points) {
  return Math.sqrt(
      (points.p2[0] - points.p1[0]) ** 2 +
      (points.p2[1] - points.p1[1]) ** 2
  );
}

const p1 = [1, 2];
const p2 = [1, 3];

const points = {
  p1: p1,
  p2: p2
};

console.log('Distance:', calculateDistance(points));

// Sum soll eine beliebige Anzahl an Parametern bekommen und deren Summe errechnen
function sum() {
  // TODO
}

console.log(`Summe sum(1, 2, 3) ist 6`, sum(1, 2, 3) === 6);
console.log(
    `Summe sum(1, 2, 3, 4, 5, 7, 34, 1234, 432) ist 1722`,
    sum(1, 2, 3, 4, 5, 7, 34, 1234, 432) === 1722
);

const numbers = [1, 2, 8, 3, 74, 1, 6, 7];
console.log(
    `Summe sum([1, 2, 8, 3, 74, 1, 6, 7]) ist `,
    sum([1, 2, 8, 3, 74, 1, 6, 7]) === 102
);

console.log('Übung 04: Destructuring und Spread DONE');
