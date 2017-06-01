### Die Ziele dieser Übung:
* Kennenlernen von
  * Arrow-Functions

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
* Implementierungen aus den vorigen Übungen lassen sich kürzer schreiben

### Aufgaben:
* Die Implementierung in __src/readers.js__ kann angepasst werden, dass sie bevorzugt Arrow-Functions verwendet für
  die __innere__ Funktion in __filterTodosByChecked()__
  
* in __readTodos()__ kann die __for..of__-Schleife durch

  ```js
  return list.map((id) => {
    const todo = todos[id];
    // [...]
  });
  ```
  
  ersetzt werden
    
* Die innere Funktion in __filterTodosByChecked()__ kann noch weiter verkürzt werden, indem die Kurzschreibweise für
  Arrow-Functions ohne __return__-Befehl verwendet wird

* Der Event-Handler __TODO_TITLE_CHANGED__ kann Parameter-Destructuring verwenden
