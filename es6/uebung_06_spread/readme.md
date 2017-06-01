### Die Ziele dieser Übung:
* Kennenlernen von
  * Spread-Operator

### Vorbereitung:
* Die Implementierung (die Dateien aus dem src/-Ordner) aus der vorherigen Übung hier in den src/-Ordner kopieren
* Falls die vorige Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorigen
  Übung kopiert werden

### Ausführen:
* npm start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Der Button __neu__ hat keine Funktion
* Todos können nicht gelöscht werden

### Erläuterung:
* Um bei Klick auf den Button einen neuen Todo-Eintrag zu erzeugen, muss der entsprechende Event-Handler implementiert
  werden
* Das Gleiche gilt für das Löschen von Todos

### Aufgaben:
* Den Event-Handler für das Hinzufügen eines Todos implementieren
  * die Implementierung erfolgt in __eventHandlers.js__
  * der Event lautet __NEW_TODO_ADDED__
  * hierbei soll für das Hinzufügen der neuen Id zu __state.data.list__ der Spread-Operator genutzt werden, um die
    bisherigen Ids zu referenzieren (d. h. es soll ein neues Array erzeugt und nicht das vorhandene mittels __push()__
    erweitert werden)
  * die neue Id kann aus __state.data.nextId__ ausgelesen werden
  * __state.data.nextId__ muss anschließend erhöht werden

* Den Event-Handler für das Löschen eines Todos implementieren
  * die Implementierung erfolgt in __eventHandlers.js__
  * der Event lautet __TODO_DELETED__
  * hierbei soll für das Löschen der Id aus __state.data.list__ die Methode __Array.indexOf__ und anschließend der
    Spread-Operator genutzt werden, um die übrigen Ids zu referenzieren (d. h. es soll ein neues Array erzeugt und nicht
    das vorhandene mittels __splice()__ verändert werden)
