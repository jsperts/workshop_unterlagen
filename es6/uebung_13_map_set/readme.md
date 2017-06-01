### Die Ziele dieser Übung:
* Kennenlernen von
  * Map
  * Set

### Vorbereitung:
* Die Implementierung (die Dateien aus dem src/-Ordner) aus der vorherigen Übung hier in den src/-Ordner kopieren
* Falls die vorige Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorigen
  Übung kopiert werden

### Ausführen:
* npm run start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Der Button "Duplikate entfernen" hat keine Funktion

### Erläuterung:
* Der entsprechende Event-Handler __DUPLICATES_DELETED__ muss implementiert werden

### Aufgaben:
* Optional (dann ist die Implementierung für DUPLICATES_DELETED nachher einfacher) kann in __initialState.js__
  __state.data.todos__ durch ein Map-Objekt ersetzt werden
  * in diesem Fall müssen die Event-Handler, die auf __state.data.todos__ zugreifen angepasst werden
  * in __actions.js__ muss die Funktion für __ACTION_INIT__ angepasst werden
  * in __reader.js__ muss an zwei Stellen __`todos[id]`__ durch __`todos.get(id)`__ ersetzt werden

* In __eventHandlers.js__ muss ein neuer Event-Handler für __DUPLICATES_DELETED__ implementiert werden
  * Zum Finden der Duplikate kann über die Objekte in __state.data.todos__ iteriert werden
    * falls todos noch ein Objekt ist: mit __Object.keys(state.data.todos)__
    * falls todos eine Map ist: direkt mit __for..of__ über __state.data.todos__
  * Die bisher gefundenen Titel können in einem Set hinterlegt werden
  * Die Ids der gefundene Duplikate kommen in ein Set
  * Die Todos müssen aus __state.data.todos__ und __state.data.list__ entfernt werden
