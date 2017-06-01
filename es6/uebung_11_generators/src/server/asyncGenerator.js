function asyncGenerator(generator) {
  // Diese Funktion soll eine Funktion zurückliefern, die bei Aufruf den Generator startet (aufruft) und dann ein
  // Promise zurückliefert

  // der übergebene Generator liefert (nach dem Start) Promises per yield zurück
  // wenn das Promise resolved ist, soll das Ergebnis dem Generator über next(value) zurückgeliefert werden

  // optional kann auch eine Fehlerbehandlung eingebaut werden (Aufruf throw(error))

}

export default asyncGenerator;
