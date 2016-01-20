(1)
Die Datei authors_form.html beinhaltet ein Formular, um ein neuen Autor zu erstellen bzw. ein existierenden Autor
zu editieren.
Autorname ist ein Pflichtfeld
Geburtsjahr ist ein Pflichtfeld und soll eine Zahl sein
Die Bücherliste darf auch leer sein

Nur gültige Daten sollen später an den Server geschickt werden. Berücksicht dies in eurem Code.
Wann Ihr die Validierung durchführt und, ob Ihr Fehlermeldungen anzeigt ist euch überlassen.

(2)
Wenn der Nutzer auf den Cancel-Button klickt soll der Browser zur Hauptseite navigieren

(3)
Wenn der Nutzer auf Submit klickt sollen die Daten an den Server geschickt werden. Bei success soll der Browser zur
Hauptseite navigieren.
Für ein neuen Autor (hat noch keine ID) nutzt http://127.0.0.1:8081/api/v1/author mit der POST Methode. Der Server
wird dann das Autor-Objekt mit eine ID zurück geben
Für ein update nutzt http://127.0.0.1:8081/api/v1/author/:id mit der PUT Methode.

(4)
Stellt sicher dass:
(a) Beim hinzufügen/update auch die Liste der Autoren aktualisiert wird ohne ein Page-Reload
(b) Das Formular immer leer ist beim Hinzufügen und immer die aktuelle Daten des Autors hat bei Updates
(c) Kein Fehler auftritt, wenn der Nutzer direkt zum Formular navigiert ohne über die Hauptseite zu gehen

(5) Optional
Eigene Validator-Direktive die überprüft, ob das gegebene Geburtsjahr nicht in der Zukunft liegt.

(6) Optional
ng-messages nutzen für die Validierung

Angular API Doku für die Version 1.5.0:
https://code.angularjs.org/1.5.0/docs/api/ng

Folgende Module wurden in der Lösung verwendet:
ngRoute
ngMessages
(import ngMessages from 'angular-messages')

Folgende Direktiven wurden in der Lösung verwendet:
form
ng-messages
ng-message
ng-model-options
ng-model
ng-submit

Folgende Services wurden in der Lösung verwendet:
$routeProvider
$routeParams
$location
$http
$q
