### Die Ziele dieser Übung:

* Kennenlernen von webpack
  * Zweck
  * Benutzung
  * Konfiguration


### Problem:

* Das Verzeichnis __src__ enthält mehrere Dateien, die allerdings zusammengefasst als eine Datei ausgeliefert werden
  sollen
  * dies ist hier für Node.js eigentlich nicht wirklich nötig, für den Browser ist es allerdings wichtig, nicht viele
    kleine Dateien einzeln auszuliefern
  * in diesem Beispiel verwenden wir der Einfachheit halber dennoch Node.js


### Aufgaben:

* Ausführen mittels Node.js (über babel-register, um imports zu transformieren)

  ```sh
  node src/node_loader.js 5
  ```

  in dem Verzeichnis mit dieser readme.md-Datei
    
* Ausführen von webpack mit

  ```sh
  npm run webpack
  ```

  in dem Verzeichnis mit dieser readme.md-Datei

  * Ausführen des generierten Codes mit
  
    ```sh
    node dist/js.bundle.js 5
    node dist/js.bundle.js foo
    ```

  in dem Verzeichnis mit dieser readme.md-Datei

* Bei Angabe eines falschen Parameters (oder bei fehlendem Parameter) soll nicht mehr die einfache Fehlermeldung
  ausgegeben werden, sondern der Text aus der Datei __usage.txt__
  * diese soll in __index.js__ mittels
    
    ```js
    import usage from './usage.txt';
    ```
          
    in eine Variable gelesen und dann mit
    
    ```js
    console.error(usage);
    ```
          
    ausgegeben werden.
    
  * hierzu muss die webpack-Konfiguration erweitert werden, dass .txt-Dateien als als Text importiert werden
    * es wird ein neuer, zusätzlicher Eintrag in module.rules benötigt (bisher ist dort nur ein Eintrag für
      .js-Dateien enthalten)
    * der neue Eintrag muss für .txt-Dateien gelten
    * anstelle von __babel-loader__ muss dieser neue Eintrag __raw-loader__ verwenden
  
  * anschließend den dist-Ordner mit webpack neu generieren (siehe oben) und erneut node ausführen:

    ```sh
    node dist/js.bundle.js 5
    node dist/js.bundle.js foo
    ```

* aktuell ist .babelrc leer, d.h. Babel transformiert die Dateien __nicht__
  * trotzdem funktioniert das Ergebnis mit Node.js, da webpack (ab Version 2) selbst die ES6-Importe auflösen kann
  * hier kann mit den .babelrc-Dateien aus der Babel-Übung experimentiert werden
  * wie unterscheidet sich das Ergebnis in dist wenn die Babel-Konfiguration so angepasst wird, dass Babel die
    ES6-Importe in CommonJS-require-Befehle umwandelt?
  * was passiert mit dem Ergebnis, wenn das Babel-Preset "es2015" verwendet wird?


### Hinweis:

Normalerweise müssen in package.json auch die benötigten Pakete (webpack@next, babel, raw-loader, ...) angegeben werden.

Damit hier nicht für jede Übung diese Pakete heruntergeladen werden müssen (mittels __npm install --save-dev__), sind
bereits im übergeordneten Verzeichnis alle Pakete, die für die verschiedenen Übungen benötigt werden, in
__package.json__ eingetragen.

Wer möchte, kann im übergeordneten Verzeichnis das Verzeichnis __node_modules__ umbenennen (bitte nicht löschen) und
dann hier in diesem Verzeichnis die benötigten Pakete mittels __npm install PAKETNAME__ (oder __yarn add PAKETNAME__)
installieren.

In diesem Fall muss auch in __package.json__ der Pfad zu webpack gelöscht werden. D.h. die entsprechende Zeile muss dann
lauten:

```
"webpack": "webpack"
```
