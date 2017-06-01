### Die Ziele dieser Übung:
* Kennenlernen von
  * Object-Shorthand-Notation

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
* Die Einstellung, ob erledigte Einträge angezeigt werden sollen, lässt sich nicht ändern
* Die Todo-Einträge lassen sich nicht abhaken

### Erläuterung:
* Die bereitgestellte Implementierung erzeugt bei Klick auf die Checkbox lediglich einen Event, ändert aber nicht den
  Eintrag im State: __state.ui.filter.hideChecked__
* Um den Eintrag __state.ui.filter.hideChecked__ zu ändern, muss ein Event-Handler für den Event implementiert werden
* Das Gleiche gilt für die Klicks auf die Checkboxen der Todos

### Aufgaben:
* Den Event-Handler für die Checkbox __Erledigte ausblenden__ implementieren
  * hierzu ist bereits die Datei __src/eventHandlers.js__ angelegt worden
  * diese muss allerdings in __index.js__ noch referenziert werden:

    ```js
    import eventHandlers from './eventHandlers';

    // [...]

    libClientMain({
      eventHandlers: eventHandlers,
      initialState: initialState,
      readers: readers,
    });
    ```

  * anschließend muss die Implementierung in __eventHandlers.js__ ergänzt werden
    
* Den Event-Handler für das Abhaken der Todos implementieren
  * hierzu muss die Datei __src/eventHandlers.js__ um einen weiteren Event-Handler erweitert werden
  * folgender Code kann als Vorlage genutzt werden

  ```js
  import {
    FILTER_CHECKED_CHANGED,
    TODO_CHECKED,
  } from 'eventTypes';

  [...]

  const eventHandlers = {
    [...]
    [TODO_CHECKED]: ...
  }
  ```

  * die Funktion erhält folgende Parameter: __(id)__
    
* Den Event-Handler zum Entfernen des Häkchens implementieren
  * dies geschieht analog zu den beiden vorhergehenen
  * der entsprechende Event lautet __TODO_UNCHECKED__

* Die Implementierung in __src/readers.js__ kann angepasst werden, dass sie
  * für __`readers[READ_TODOS_TO_SHOW]`__ die Schreibweise für berechnete Keys mit OSN verwendet, so dass die
    Funktion dem Object __readers__ direkt bei der Definition zugewiesen wird (siehe auch __eventHandlers.js__)
