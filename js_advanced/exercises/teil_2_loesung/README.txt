Vorbereitung

1) Node.js installieren
  Node.js Downloads: https://nodejs.org/dist/latest/
  Node Version Manager für MacOS und Linux: https://github.com/creationix/nvm
  Node Version Manager für Windows: https://github.com/coreybutler/nvm-windows
2) Projektabhängigkeiten installieren
  npm install
3) Grunt CLI installieren
  npm install -g grunt-cli

Übung Teil 1

1) Verstehen was der Code macht
2) Refactoring, der Code soll verständlicher werden
   jscs und jshint können dabei helfen
   In Kommandozeile: grunt aufrufen um "Fehler" zu sehen
   Die fix-Eigenschaft von jscs kann manche "Fehler" wie z. B. Einrükungen selbst fixen
3) Bug fix: Beim Sortieren sollen Groß-/Kleinbuchstabe keine Rolle spielen
4) Erweiterung: Statt nur ein Schauspieler (actor-Eigenschaft) soll ein super hero mehrere Schauspieler haben (actors-Eigenschaft als Array)
5) Erweiterung: Nach dem Submit soll das Formular leer sein
6) Code Review

Links

jscs: http://jscs.info/
jshint: http://jshint.com/
grunt: http://gruntjs.com/

Übung Teil 2

1) Lösung von Teil 1 in Module aufspalten
2) Lösung von Teil 1 mit MV* oder Flux implementieren
3) Code Review
4) Optional: Mehrere MV*/Module-Systeme nutzen
5) Optional: Unter der Tabelle soll noch eine Liste mit Superheroes angezeigt werden. Die Liste sollte nicht sortiert sein
6) Optional: Undo-Funktion implementieren für das Hinzufügen eines Superheroes