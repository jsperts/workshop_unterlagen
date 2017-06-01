### Die Ziele dieser Übung:
* Kennenlernen von
  * Desructuring

### Vorbereitung:
* Die Implementierung (den gesamten src-Ordner) aus der vorherigen Übung hierher kopieren
* Falls die vorige Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorigen
  Übung kopiert werden

### Ausführen:
* npm start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Die Texte der Todo-Einträge lassen sich nicht ändern

### Erläuterung:
* Die bereitgestellte Implementierung erzeugt beim Ändern des Textes lediglich Events, ändert aber nicht den Wert im
  State
* Um den Eintrag __state.data.todos[id].title__ zu ändern, muss ein Event-Handler für den Event implementiert werden

### Aufgaben:
* Den Event-Handler zum Ändern des Titels implementieren
  * hierzu muss die Datei __src/eventHandlers.js__ um einen weiteren Event-Handler erweitert werden
  * der entsprechende Event lautet __TODO_TITLE_CHANGED__
  * der Event-Handler erhält als Parameter ein Object:
    
  ```js
  param =   {
    id: '123',
    title: 'foo',
  }
  ```

  * für die beiden Objektattribute kann Destructuring verwendet werden

* Die Implementierung in __src/readers.js__ kann angepasst werden, dass
  * die Variablen __list__ und __todos__ per Object-Destructuring aus __state.data__ geholt werden
  * das gleiche für __hideChecked__
