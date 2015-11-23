(1)
Die Datei views/edit_view.html beinhaltet ein Formular um ein neuen Autor zu erstellen bzw. ein existierenden Autor
zu editieren. Ergänzt das nötige HTML, so dass man mit hilfe des edit controllers Autoren hinzufügen bzw. Daten
aktualisieren kann.
Autorname ist ein Pflichtfeld
Geburtsjahr ist ein Pflichtfeld und soll eine Zahl sein
Die books array darf auch leer sein

Nur gültige Daten sollen später an den Server geschickt werden. Berücksicht dies in eurem Code.
Wann Ihr die Validierung durchführt und, ob Ihr Fehlermeldungen anzeigt ist euch überlassen.

(2)
Wenn der Nutzer auf den Cancel-Button klickt soll der Browser zur Hauptseite navigieren

(3)
Wenn der Nutzer auf Submit klickt sollen die Daten an den Server geschickt werden. Bei success soll der Browser zur
Hauptseite navigieren.
Für ein neuen Autor (hat noch keine ID) nutzt http://127.0.0.1:8080/api/v1/author mit der POST Methode. Der Server
wird dann eine ID zurück geben
Für ein update nutzt http://127.0.0.1:8080/api/v1/author/:id mit der PUT Methode.

(4)
Stellt sicher dass:
(a) Beim hinzufügen/update auch die Liste der Autoren aktualisiert wird ohne ein Page-Reload
(b) Das Formular immer leer ist beim Hinzufügen und immer die aktuelle Daten des Autors hat bei updates
(c) Kein Fehler auftritt wenn der Nutzer direkt zum Formular navigiert ohne über die Hauptseite zu gehen

(5) Optional
Eigener Validator-Direktive die überprüft, dass das gegebene Geburtsjahr nicht in der Zukunft liegt.

(6) Optional
Versucht die Anzahl von Serveranfragen zu minimieren. Hint: nutzt ein Cache

AngularJS API Doku für die Version 1.3.15:
https://code.angularjs.org/1.3.15/docs/api/ng

Folgende Module wurden in der Lösung verwendet:
ngRoute
ngMessages

Folgende Direktiven wurden in der Lösung verwendet:
form
ng-messages
ng-message
ng-model-options
ng-model

Folgende Services wurden in der Lösung verwendet:
$routeProvider
$routeParams
$location
$q
$http
$cacheFactory
