### Die Ziele dieser Übung:
* Kennenlernen von
  * Object.assign

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
* Normalerweise wird in den Event-Handlern der alte State nicht verändert, sondern ein neuer State mit den neuen Werten
  erzeugt
* Wir haben aus Einfachheitsgründen hier bisher darauf verzichtet
* Für den Event-Handler für __NEW_TODO_ADDED__ soll hier exemplarisch das Erzeugen eines neuen States implementiert
  werden

### Erläuterung:
* Ändert man im vorhandenen State ein Objekt-Attribut, so ist die Änderung überall sichtbar, wo dieses Objekt
  referenziert wird
* Da allerdings die Komponenten, die eventuell das Objekt referenzieren nichts von der Änderung mitbekommen, kann dies
  ggf. zu Inkonsistenzen führen
* Zusätzlich lassen sich Optimierungen vornehmen, wenn man weiß, dass sich ein Objekt nicht ändert (z.B. kann das
  Rendering von Teilen der Webseite einfach übersprungen werden)

### Aufgaben:
* Die Funktionen __readTodos()__ und __highlightTodoTitle()__ in __readers.js__ können mit __Object.assign__ etwas
  vereinfacht werden

* Optional kann der Event-Handler für __NEW_TODO_ADDED__ so angepasst werden, dass der vorhandene prevState nicht
  geändert wird
  * hierzu kann für __state.data.todos__ und für den neuen __state__ die Funktion __Object.assign()__ verwendet werden
  * für __state.data.list__ wird bereits ein neues Array erzeugt (siehe die entsprechende Übung hierzu)

### Anmerkungen:
* Wenn man sich die entsprechende Vorgehensweise für die anderen Event-Handler ansieht, merkt man schnell, dass dies
  sehr aufwändig wird
  * Daher gibt es für solche verschachtelten Objektbäume Hilfsmethoden, wie z. B. 

    https://github.com/kolodny/immutability-helper

* Um das versehentliche Verändern zu verhindern, gibt es auch Hilfsmittel, z. B.

  https://github.com/aearly/icepick
    
  https://github.com/facebook/immutable-js
    
  und viele weitere
