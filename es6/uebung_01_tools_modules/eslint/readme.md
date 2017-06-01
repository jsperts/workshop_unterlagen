### Die Ziele dieser Übung:
* Kennenlernen des Tools ESLint
  * Zweck
  * Benutzung
  * Konfiguration

### Problem:
* Die Datei index.js besitzt
  * Fehler
  * Inkonsistente Formattierung

### Aufgaben:
* Ausführen von ESLint mittels

  ```sh
  npm run eslint
  ```

  in dem Verzeichnis mit dieser readme.md-Datei

* Konfiguration von ESLint, dass Semikolons am Zeilenende nötig sind
  * Die vorgegebene Konfiguration nutzt die Vorlage "eslint-config-standard". Diese verbietet die Nutzung von
    Semikolons am Zeilenende.
  * Wir wollen hier allerdings am Zeilenende Semikolons nutzen, daher muss eine Konfigurationseinstellung ergänzt
    werden, die die Vorlage an dieser Stelle überschreibt.
  * Bitte die Datei __.eslintrc__ anpassen
  * Hinweise zur Konfiguration:
    * Entweder:
      http://eslint.org/
      und dann oben nach __semicolon__ suchen
    * oder direkt:
      http://eslint.org/docs/rules/semi
* Die Datei index.js korrigieren, dass keine Fehler mehr von ESLint erkannt werden
  * ggf. kann hierfür `npm run eslint --fix` verwendet werden
* testen, dass index.js funktioniert:

  ```sh
  node index.js 5
  ```


### Hinweis:

Normalerweise müssen in package.json auch die benötigten Pakete (eslint, ...) angegeben werden.

Damit hier nicht für jede Übung diese Pakete heruntergeladen werden müssen (mittels __npm install --save-dev__), sind
bereits im übergeordneten Verzeichnis alle Pakete, die für die verschiedenen Übungen benötigt werden, in
__package.json__ eingetragen.

Wer möchte, kann im übergeordneten Verzeichnis das Verzeichnis __node_modules__ umbenennen (bitte nicht löschen) und
dann hier in diesem Verzeichnis die benötigten Pakete mittels __npm install PAKETNAME__ (oder __yarn add PAKETNAME__)
installieren.

In diesem Fall muss auch in __package.json__ der Pfad zu eslint gelöscht werden. D.h. die entsprechende Zeile muss dann
lauten:

```
"eslint": "eslint ."
```
