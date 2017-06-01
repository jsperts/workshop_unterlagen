### Die Ziele dieser Übung:
* Kennenlernen von
  * Promises
  * Symbols

### Vorbereitung:
* Die Implementierung (die Dateien aus dem src/-Ordner) aus der vorherigen Übung hier in den src/-Ordner kopieren
  * allerdings ohne die Dateien __index.js__ und __initialState.js__
* Falls die vorige Implementierung nicht abgeschlossen wurde, können auch die Dateien aus der Lösung zur vorigen
  Übung kopiert werden

### Ausführen:
* npm start
* im Browser:
  http://localhost:3000
  öffnen

### Problem:
* Bisher werden nur Dummy-Daten, die in __initialState.js__ hinterlegt sind, genutzt
* Es sollen initial Daten vom Server geladen werden

### Erläuterung:
* In den Event-Handlern darf nur der State angepasst werden, daher muss das Laden der Daten außerhalb geschehen
* Hierfür sind Actions vorgesehen, die in der vorbereiteten Implementierung aufgerufen werden
* Die Actions können wiederum Events erzeugen, über welche der State angepasst werden kann
* Beim Starten der Anwendung wird die Action __ACTION_INIT__ aufgerufen

### Aufgaben:
* Die Action __ACTION_INIT__ soll asynchron Daten vom Server laden
  * für die Initialisierung die hier neu vorbereitete Datei __index.js__ verwenden, die auch __actions.js__ einbindet
  * die Implementierung erfolgt in __src/actions.js__
  * vor dem Laden soll der neue Event __LOADING_STARTED__ erzeugt werden, über welchen im State __state.ui.loading__
    auf __true__ gesetzt wird
  * wenn die Daten geladen sind, werden diese über den neuen Event __DATA_LOADED__ im State hinterlegt
  * weitere Hinweise stehen in __actions.js__
    
* Für die neuen Events müssen in __eventHandlers.js__ noch Event-Handler geschrieben werden

* Optional kann auch noch eine Fehlerbehandlung implementiert werden (siehe hierzu die Hinweise in __actions.js__)
