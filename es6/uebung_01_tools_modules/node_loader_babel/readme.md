### Die Ziele dieser Übung:
* Kennenlernen des Tools Babel zum transpilieren on-the-fly
  * Zweck
  * Benutzung
  * Konfiguration

### Problem:
* Die Datei __index.js__ nutzt ES6-Module-Syntax, die Node.js nicht versteht

### Aufgaben:
* Ausführen von Node.js mit:

  ```sh
  node index.js 5
  ```

  in dem Verzeichnis mit dieser readme.md-Datei

  funktioniert nicht
    
* Erstellen einer Datei __starter.js__
  * diese muss den babel-loader registrieren (__require('babel-register')__)
  * und dann __index.js__ aufrufen (__require('./index')__)
* Erstellen der Babel-Konfiguration
  * Erstellen der Datei __.babelrc__
  * Inhalt: siehe Übung zu Babel
* Prüfen, dass der Aufruf funktioniert

  ```sh
  node starter.js 5
  ```


### Hinweis:

Normalerweise muss hier eine Datei __package.json__ angelegt werden, in welcher die benötigten Pakete (babel-register,
babel-plugin-transform-es2015-modules-commonjs, ...) referenziert sind.

Damit hier nicht für jede Übung diese Pakete heruntergeladen werden müssen (mittels __npm install --save-dev__), sind
bereits im übergeordneten Verzeichnis alle Pakete, die für die verschiedenen Übungen benötigt werden, in
__package.json__ eingetragen.

Wer möchte, kann im übergeordneten Verzeichnis das Verzeichnis __node_modules__ umbenennen (bitte nicht löschen) und
dann hier in diesem Verzeichnis die Datei __package.json__ anlegen (mittels __npm init__ oder __yarn init__) und die
benötigten Pakete mittels __npm install PAKETNAME__ (oder __yarn add PAKETNAME__) installieren.
