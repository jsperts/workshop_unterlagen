### Die Ziele dieser Übung:
* Kennenlernen von
  * Generatoren

### Vorbereitung:
* ACHTUNG: Die Implementierung (die Dateien aus dem src/-Ordner) aus der vorletzten Übung wird hier wieder benötigt
* Falls die Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorletzten Übung
  kopiert werden
* Ebenso wird die Datei __src/server/iterateLoadedData.js__ aus der letzten Übung benötigt

### Ausführen:
* npm start

### Problem:
* Der Server speichert die Daten in einer Datei
* Diese Datei muss gelesen werden
* Dies geschieht über asynchrone Aufrufe
* Es sollen hier keine Callbacks verwendet werden, sondern ein Generator

### Aufgaben:
* In __src/server/asyncGenerator.js__ den Wrapper implementieren, der vom Generator die Promises entgegennimmt und die
  Ergebnisse wieder an den Generator zurückgibt
* Weitere Hinweise finden sich in der Datei
* Zum Testen kann __src/server/testGenerator.js__ verwendet werden:

  ```sh
  node src/server/testGenerator.js
  ```
  
  Wenn die Implementierung korrekt ist, sollte nach dem Aufruf
  __`Ergebnis: Start: Input-Wert, Schritt 1, Schritt 2, Schritt 3`__
  auf der Konsole angezeigt werden.

### Hinweise:
* Die Datei __src/server/loadFile.js__ ist bereits vorimplementiert und muss nicht angepasst werden
