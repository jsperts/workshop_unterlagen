Vorbereitung:

grunt global installieren mit: npm install -g grunt-cli

Projekt kompilieren mit: grunt serve
(Startet auch ein http server)

Optional in eine zweite Konsole den watch starten: grunt watch

(1)
Als erstes soll die Anwendung in Komponenten aufgeteilt werden. Ihr könnt dafür das HTML aus der index.html-Datei nutzen.

(2)
Die Anwendung soll eine Liste von Autoren anzeigen. Die Liste soll alphabetisch nach Namen sortiert sein.
Alle Autoren befinden sich in:
app/authors.service.js

(3)
Suchfunktion:
Bei Klick auf den Search Button soll der Inhalt des Inputfeldes als Parameter für eine Suchfunktion benutzt werden.
Wenn das Inputfeld leer ist, sollen alle Autoren angezeigt werden.
Wenn das Inputfeld ein Wert hat, soll dieser mit dem Autornamen verglichen werden (===). Der Vergleich soll vom
Anfang des Namens bis zu Länge des Inputfeldwerts stattfinden. Wenn der Autorname mit dem Suchparameter anfängt soll
der Autor in der Autorenliste angezeigt werden.
  Bsp.:
   Autorennamen = ['Agatha', 'Ian', 'Ernest'], Inputfeldwert = 'a'
   Autoren die angezeigt werden = ['Agatha']
  Ihr braucht auf Groß/Kleinbuchstaben nicht zu achten
Wenn die Autorenliste leer ist soll eine Meldung angezeigt werden, dass keine Autoren zu den gegebenen Suchparameter
passen.

(4)
Wenn die Seite geladen wird sollen keine geschweifte Klammern ( { ) angezeigt werden. (Bindings die noch nicht
evaluiert worden sind sollen nicht angezeigt werden)

(5) Optional
Erweitert die Suchfunktion, so dass man auch nach Bücher und das Geburtsjahr suchen kann.

Nutzt am besten one-time bindings wo es möglich ist.

Angular API Doku für die Version 1.5.0:
https://code.angularjs.org/1.5.0/docs/api/ng

Folgende Direktiven wurden in der Lösung verwendet:
ng-app
ng-model
ng-click
ng-repeat mit orderBy filter
ng-if
