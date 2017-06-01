require('babel-register');

const asyncGenerator = require('./asyncGenerator').default;

function* testAsync(value) {
  const result = ['Start: ' + value];
  result.push(yield Promise.resolve('Schritt 1'));
  result.push(yield Promise.resolve('Schritt 2'));
  result.push(yield Promise.resolve('Schritt 3'));
  return 'Ergebnis: ' + result.join(', ');
}

const expectedError = 'Test Fehlerbehandlung';
function* testAsyncWithError1(value) {
  const result = ['Start: ' + value];
  try {
    result.push(yield Promise.reject(expectedError));
  } catch (error) {
    throw new Error(error);
  }
  return 'Diese Zeile sollte nicht aufgerufen werden: ' + result.join(', ');
}

const expectedError2 = 'Fehler erfolgreich abgefangen';
function* testAsyncWithError2(value) {
  const result = ['Start: ' + value];
  try {
    result.push(yield Promise.reject(expectedError));
  } catch (error) {
    return expectedError2;
  }
  return 'Diese Zeile sollte nicht aufgerufen werden: ' + result.join(', ');
}

const toTest = asyncGenerator(testAsync)('Input-Wert');

toTest.then((result) => console.log(result))
  .catch((error) => console.log('Fehler:', error));

const toTestWithError1 = asyncGenerator(testAsyncWithError1)('Input-Wert');
toTestWithError1.then((result) => console.log('Fehlerbehandlung ist nicht implementiert oder funktioniert nicht.'))
  .catch((error) => error && error.message === expectedError
    ? console.log('Fehlerbehandlung Test 1 funktioniert')
    : console.log('Fehlerbehandlung ist nicht implementiert oder funktioniert nicht. In Test 1 erwartet: Error("' +
    expectedError + '"), erhalten: "' + error + '"'));

const toTestWithError2 = asyncGenerator(testAsyncWithError2)('Input-Wert');
toTestWithError2.then((result) => result === expectedError2
  ? console.log('Fehlerbehandlung Test 2 funktioniert.')
  : console.log('Fehlerbehandlung Test 2 ist fehlgeschlagen, erwartet:', expectedError2, ', erhalten:', result))
  .catch((error) => console.log('Fehlerbehandlung ist nicht implementiert oder funktioniert nicht. In Test 2 ' +
    'erwartet: kein Fehler, erhalten:', error));
