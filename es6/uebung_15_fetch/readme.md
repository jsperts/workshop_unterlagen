### Die Ziele dieser Übung:
* Kennenlernen von
  * async functions

### Vorbereitung:
* Die Implementierung (die Dateien aus dem src/-Ordner) aus der vorherigen Übung hier in den src/-Ordner kopieren
  * Außer __actions.js__
* Falls die vorige Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorigen
  Übung kopiert werden

### Ausführen:
* npm run start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Die Daten werden zwar vom Server gelesen aber nie gespeichert

### Aufgaben:
* In __src/saveToServer.js__ die Implementierung ergänzen, dass die Daten zum Server gesendet werden

### Hinweis:
* Die Datei __src/actions.js__ ist vorbereitet, da die Ergänzungen dort recht wenig Neues bringen und Schreibarbeit sind
  * Dort wird __saveToServer()__ bei allen Aktionen aufgerufen, die die Todos ändern
  * Wichtig ist, dass __saveToServer()__ erst nach __dispatchEvent()__ aufgerufen wird
  * Wer mag kann testen, was passiert, wenn man zuerst __saveToServer()__ und dann __dispatchEvent()__ aufruft
