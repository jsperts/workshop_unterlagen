function iterateLoadedData(data) {
  // diese Funktion soll einen Iterator zurückliefern

  // data enthält einen mehrzeiligen Text
  // die Zeilen sind mit \n getrennt

  // der Iterator soll in jeder Iteration die nächste Zeile der Datei zurückliefern
  // die Zeile soll hierbei über JSON.parse(zeile) in ein JavaScript-Objekt transformiert werden

  const dataLines = data.split('\n');
  let count = 0;

  return {
    next() {
      if (count >= dataLines.length) {
        return {
          done: true,
        };
      } else {
        const valueJson = dataLines[count];
        const value = JSON.parse(valueJson);
        count++;
        return {
          done: false,
          value,
        };
      }
    },
  };
}

export default iterateLoadedData;
