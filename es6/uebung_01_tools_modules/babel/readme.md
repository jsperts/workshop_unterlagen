### Die Ziele dieser Übung:
* Kennenlernen des Tools Babel
  * Zweck
  * Benutzung
  * Konfiguration

### Problem:
* Die Dateien __src1/index.js__ und __src2/index.js__ besitzen ES6-Befehle (hier insbesondere __import__), die Node.js
  nicht versteht

### Aufgaben:
* Ausführen von Babel:

  ```sh
  npm run babel1
  ```

  in dem Verzeichnis mit dieser readme.md-Datei

  * ohne Konfiguration ändert Babel die Datei nicht:
    
    ```sh
    node dist1/index.js 5
    ```
            
    führt zu einem Fehler

* Konfiguration von Babel, dass __import__ durch die CommonJS-Syntax ersetzt wird
  * Hierzu muss die Datei __src1/.babelrc__ ergänzt werden
  * Es muss das Plugin __babel-plugin-transform-es2015-modules-commonjs__ hinzugefügt werden
  * anschließend kann durch einen erneuten Aufruf von
    
    ```sh
    npm run babel1
    ```

    die Datei in __dist1__ neu generiert und mit
      
    ```sh
    node dist1/index.js 5
    ```
            
    überprüft werden, ob dies jetzt funktioniert

* Um alle ES2015-Features zu ersetzen, kann das Preset __es2015__ verwendet werden
  * In der Datei __src2/.babelrc__ muss dieses ergänzt werden, damit mit
    
    ```sh
    npm run babel2
    ```
            
    die Datei __src2/index.js__ entsprechend nach __dist2/index.js__ transpiliert wird
      
      
### Hinweis:

Normalerweise müssen in package.json auch die benötigten Pakete (babel-cli,
babel-plugin-transform-es2015-modules-commonjs, ...) angegeben werden.

Damit hier nicht für jede Übung diese Pakete heruntergeladen werden müssen (mittels __npm install --save-dev__), sind
bereits im übergeordneten Verzeichnis alle Pakete, die für die verschiedenen Übungen benötigt werden, in
__package.json__ eingetragen.

Wer möchte, kann im übergeordneten Verzeichnis das Verzeichnis __node_modules__ umbenennen (bitte nicht löschen) und
dann hier in diesem Verzeichnis die benötigten Pakete mittels __npm install PAKETNAME__ (oder __yarn add PAKETNAME__)
installieren.

In diesem Fall muss auch in __package.json__ der Pfad zu babel gelöscht werden. D.h. die entsprechenden Zeilen müssen
dann lauten:

```
"babel1": "babel src1 -d dist1",
"babel2": "babel src2 -d dist2"
```
