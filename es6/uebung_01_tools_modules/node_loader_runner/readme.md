### Die Ziele dieser Übung:
* Kennenlernen des ESM-Loaders für Node.js __node-esml__
  * Zweck
  * Benutzung

### Problem:
* Die Datei __index.js__ nutzt ES6-Module-Syntax, die Node.js nicht versteht

### Aufgaben:
* Ausführen von Node.js mit:

  ```sh
  node index.js
  ```

  in dem Verzeichnis mit dieser readme.md-Datei

  funktioniert nicht
    
* Ausführen mit den Node.js-Module-Loader node-esml:

  ```sh
  ../../node_modules/.bin/node-esml index.js 5
  ```

  funktioniert auch noch nicht, da node-esml die Kommandozeilenargumente nicht anpasst
  
* Anpassen von __index.js__, dass der richtige Parameter (__`argv[3]`__) genutzt wird

* Eintragen des Befehls in __package.json__, so dass der Pfad zu node-esml nicht mehr angegeben werden
  muss, sondern direkt
  
  ```sh
  npm run index 5
  ```
        
  genutzt werden kann


### Hinweis:

Normalerweise müssen in package.json auch die benötigten Pakete (node-es-module-loader, ...) angegeben werden.

Damit hier nicht für jede Übung diese Pakete heruntergeladen werden müssen (mittels __npm install --save-dev__), sind
bereits im übergeordneten Verzeichnis alle Pakete, die für die verschiedenen Übungen benötigt werden, in
__package.json__ eingetragen.

Wer möchte, kann im übergeordneten Verzeichnis das Verzeichnis __node_modules__ umbenennen (bitte nicht löschen) und
dann hier in diesem Verzeichnis die benötigten Pakete mittels __npm install PAKETNAME__ (oder __yarn add PAKETNAME__)
installieren.

In diesem Fall muss auch in __package.json__ der Pfad zu node-esml gelöscht werden. D.h. die entsprechende Zeile muss dann
lauten:

```sh
"index": "node-esml index.js"
```
