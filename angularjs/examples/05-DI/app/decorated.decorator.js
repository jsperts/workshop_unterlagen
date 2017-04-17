// $delegate ist die Factory-Funktion
function decorator($delegate) {
  // Das Factory-Objekt was später injiziert wird
  return {
    getName() {
      return `Decorated: ${$delegate.getName()}`;
    }
  };
}

// DI: inline array annotation
export default ['$delegate', decorator];
