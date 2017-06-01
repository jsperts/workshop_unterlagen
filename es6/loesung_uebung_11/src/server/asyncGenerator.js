function asyncGenerator(generator) {
  // Diese Funktion soll eine Funktion zurückliefern, die bei Aufruf den Generator startet (aufruft) und dann ein
  // Promise zurückliefert

  // der übergebene Generator liefert (nach dem Start) Promises per yield zurück
  // wenn das Promise resolved ist, soll das Ergebnis dem Generator über next(value) zurückgeliefert werden

  // optional kann auch eine Fehlerbehandlung eingebaut werden (Aufruf throw(error))

  return function (...params) {
    return Promise.resolve(callNext(generator(...params), undefined));
  };
}

function callNext(generator, value) {
  const next = generator.next(value);
  return handleNextValue(generator, next);
}

function throwError(generator, error) {
  const next = generator.throw(error);
  return handleNextValue(generator, next);
}

function handleNextValue(generator, next) {
  if (next.done) {
    return Promise.resolve(next.value);
  } else {
    return next.value
      .then((nextValue) => callNext(generator, nextValue))
      .catch((error) => throwError(generator, error));
  }
}

export default asyncGenerator;
