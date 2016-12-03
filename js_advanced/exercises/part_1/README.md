## Vorbereitung

* Node.js installieren
  * Node.js Downloads: https://nodejs.org/dist/latest/
  * Node Version Manager für MacOS und Linux: https://github.com/creationix/nvm
  * Node Version Manager für Windows: https://github.com/coreybutler/nvm-windows
* Projektabhängigkeiten installieren
  * `npm install`

* Screw up part 1
  * Screw up property names in city objects
  *  Screw up function names
  *  Change indentations
* links for webpack etc.

## Webserver starten

1) npm start

## Übung Teil 1

1) Verstehen was der Code macht
2) Refactoring, der Code soll verständlicher werden (eslint kann dabei helfen)
3) Eingabefelder sollen on-submit zurückgesetzt werden
4) Code Review

### Links

* eslint: http://eslint.org/
* https://webpack.js.org/ (webpack 2.x)

### Lösung: in part_2

## Übung Teil 2

1) Lösung von Teil 1 in Module aufspalten
2) Lösung von Teil 1 mit MV*/Flux implementieren
3) Code Review
4) Optional: Mit template literals arbeiten
5) Optional: Mehrere MV*/Module-Systeme nutzen

### Lösung: in part_3

## Übung Teil 3

### Critical Rendering Path Optimierung

1) Das Ladeverhalten 2-3 Seiten mit Hilfe von DevTools, YSlow und webpagetest.org unter die Lupe nehmen. Was könnte man da verbessern?
2) Das Ladeverhalten der Beispielanwendung analysieren
3) Testen was passiert, wenn das Netzwerk langsam ist (Throttling in DevTools/server.js in examples/15-Loading_Steps)
4) Wie ändert sich das Ladeverhalten wenn die Reihenfolge von script-/link-Tags sich ändert?
5) Das Ladeverhalten der Beispielanwendung optimieren
6) Optional: Wie lange brauchen die Bilder bis die angezeigt werden können?
7) Optional: Wie können wir die Bilder-Ladezeit optimieren?

### Lösung: in part_4

## Übung Teil 4

### Laufzeitoptimierung

1) Detailsansicht optimieren:
   * öffnen/schließen
   * Details soll nur einmal im DOM sein
2) Scrolling optimieren. Ist die Animation beim hover nötig? Hat die für den Nutzer ein Mehrwert?
3) Selektoren optimieren. Auch in hinsicht auf Wartbarkeit. Was muss jetzt gemacht werden um ein größeres Bild in der Detailansicht zu haben?
4) Kann man auch andere aspekte der Anwendung optimieren?
5) Wartbarkeit der Anwendung optimieren. Teilweise sind die Views zu groß/machen zuviel. Sind sie auch wirklich dafür verantwortlich?
6) Optional: Code Review

### Lösung: in solution
