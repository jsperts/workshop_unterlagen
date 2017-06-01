### Die Ziele dieser Übung:
* Kennenlernen von
    * Template Literals
    * Tagged Templates

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
* Es soll oberhalb der Todos ein Text nach folgendem Muster stehen:

  Von insgesamt 15 Todo(s) sind 4 erledigt.

### Erläuterung:
* Die bereit gestellte Implementierung enthält bereits einen Platzhalter für den Text
* Der Text wird aus einer Reader-Funktion geholt, die noch nicht implementiert ist

### Aufgaben:
* Die Reader-Funktion für den Text implementieren
  * die Implementierung erfolgt in __readers.js__
  * der Reader-Typ lautet __READ_INFO_TEXT__
  * die Funktion erhält als Parameter analog zur bestehenden Reader-Funktion den __state__ als Parameter
  * sie muss den fertigen Text zurückliefern
  * für die Implementierung soll ein Template Literal verwendet werden

* Im zweiten Schritt sollen die Werte hervorgehoben werden
  * hierzu soll ein Tagged Template benutzt werden
  * die Tag-Funktion lautet __highlight__
  * die Implementierung soll in der Datei __src/tagFunctions.js__ erfolgen
    * siehe auch dort für weitere Hinweise
  * in __readers.js__ muss diese Funktion importiert und dann lediglich vor das Template Literal geschrieben werden
