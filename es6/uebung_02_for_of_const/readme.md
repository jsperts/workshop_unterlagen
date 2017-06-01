### Die Ziele dieser Übung:
* Kennenlernen von
  * const
  * for..of

### Ausführen:
* npm start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Es erscheint keine Todo-Liste

### Erläuterung:
* Es ist bereits eine Implementierung bereitgestellt, die die Todo-Liste anzeigen kann. Diese muss nicht angepasst
  werden
* Die bereitgestellte Implementierung nutzt jedoch nicht die Todos aus dem initialState direkt, sondern liest diese
  über eine Reader-Funktion aus
* Diese Reader-Funktion muss nun implementiert werden. Sie soll die Todos in der korrekten Reihenfolge und ggf. nach den
  nicht abgehakten Todos gefiltert zurückliefern

### Aufgaben:
* Die anzuzeigende Todo-Liste aus den Todo-Objekten und der Liste der Todo-Ids zusammenbauen
  * Die Implementierung erfolgt in src/readers
  * Die Methode muss ein Array von Todos zurückliefern
  * Die Reihenfolge muss exakt der Reihenfolge der Ids aus __state.data.list__ entsprechen
  * Jedes Todo muss folgende Attribute besitzen:
    * id
    * title
    * checked
* Zum Testen der Filter-Funktion kann in __initialState.js__ der Wert von __hideChecked__ auf __true__ geändert werden

### Hinweis:
* Nach dem Ändern der Implementierung muss der Server nicht neu gestartet werden, der Browser aktualisiert sich
  selbständig
