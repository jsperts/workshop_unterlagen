Übung Teil 3

Critical Rendering Path Optimierung

1) Das Ladeverhalten 2-3 Seiten mit Hilfe von DevTools, YSlow und webpagetest.org unter die Lupe nehmen. Was könnte man da verbessern?
2) Das Ladeverhalten der Beispielanwendung analysieren
3) Testen was passiert, wenn das Netzwerk langsam ist (Throttling in DevTools/server.js in examples/15-Loading_Steps)
4) Wie ändert sich das Ladeverhalten wenn die Reihenfolge von script-/link-Tags sich ändert?
5) Das Ladeverhalten der Beispielanwendung optimieren
6) Optional: Wie lange brauchen die Bilder bis die angezeigt werden können?
7) Optional: Wie können wir die Bilder-Ladezeit optimieren?

Mögliche Tools für die Optimierung:

grunt-contrib-cssmin : Minimiert/Konkateniert CSS-Dateien
    https://github.com/gruntjs/grunt-contrib-cssmin
grunt-contrib-htmlmin : Minimiert HTML-Dateien
    https://github.com/gruntjs/grunt-contrib-htmlmin
grunt-contrib-requirejs : Minimiert/Konkatenier/Uglifier für JavaScript-Dateien
    https://github.com/gruntjs/grunt-contrib-requirejs
grunt-contrib-clean : Löscht Dateien und Verzeichnisse
    https://github.com/gruntjs/grunt-contrib-clean
grunt-contrib-copy: Kopiert Dateien und Verzeichnisse
    https://github.com/gruntjs/grunt-contrib-copy


Übung Teil 4

Laufzeitoptimierung

1) Detailsansicht optimieren (öffnen/schließen)
2) Scrolling optimieren. Ist die Animation beim hover nötig? Hat die für den Nutzer ein Mehrwert?
3) Selektoren optimieren. Auch in hinsicht auf Wartbarkeit. Was muss jetzt gemacht werden um ein größeres Bild in der Detailansicht zu haben?
4) Kann man auch andere aspekte der Anwendung optimieren?
5) Wartbarkeit der Anwendung optimieren. Teilweise sind die Views zu groß/machen zuviel. Sind sie auch wirklich dafür verantwortlich?
6) Optional: Code Review