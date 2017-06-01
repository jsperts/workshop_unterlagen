### Die Ziele dieser Übung:
* Kennenlernen von
  * String-Erweiterungen (insbesondere __.includes()__)

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
* Der Filtertext oberhalb der Todo-Liste hat keine Funktion

### Erläuterung:
* Beim Ändern des Textes wird ein Event erzeugt, für welches ein Event-Handler implementiert werden muss
* Der bisherige Reader für die Todo-Liste muss um eine entsprechende Filter-Funktion ergänzt werden

### Aufgaben:
* Die Reader-Funktion in __readers.js__ für die Todo-Liste (Reader-Typ __READ_TODOS_TO_SHOW__) erweitern
  * es kann folgendes Code-Fragment als Startpunkt verwendet werden:
  
    ```js
    result = result
      .filter(filterTodosByChecked(hideChecked))
      .filter(filterTodosByText(text));
    ```

  * die Funktion filterTodosByText muss angelegt und implementiert werden
  * hierbei bietet es sich an, __.includes()__ zu verwenden

* Es muss ein Handler für den Event __FILTER_TEXT_CHANGED__ implementiert werden
  * die Implementierung erfolgt in __eventHandlers.js__
  * der Handler erhält einen Parameter: den neuen Filtertext
  * der Handler muss __state.ui.filter.text__ auf den erhaltenen Wert setzen

* Im zweiten Schritt sollen die gefundenen Wortteile hervorgehoben werden
  * hierzu soll ein Mapping der Todo-Titel auf das Format aus der letzten Übung erfolgen, d. h.
    * angenommen es wird nach __ba__ gesucht
    * ein Todo-Eintrag mit dem Titel __"foo bar baz"__ sollte dann wie folgt vom Reader zurückgeliefert werden:
    
      ```js
      {
        id: '123',
        title: [
          'foo ',
          { text: 'ba', highlight: true },
          'r ',
          { text: 'ba', highlight: true },
          'z',
        ],
        checked: false,
      }
      ```

  * hierbei wird __kein__ tagged template verwendet
  * es kann folgendes Code-Fragment als Startpunkt verwendet werden:
  
    ```js
    result = result
      .filter(filterTodosByChecked(hideChecked))
      .filter(filterTodosByText(text))
      .map(highlightTodoTitle(text));
    ```
  
  * Tipp: um die gesuchten Abschnitte in __todo.title__ zu finden, kann __todo.title.split(text)__ verwendet werden
  * Tipp 2: die hightlight-Funktion kann hier wiederverwendet werden
