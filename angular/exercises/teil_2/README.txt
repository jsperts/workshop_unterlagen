(1)
Die Daten sollen jetzt vom Server kommen. Nutzt dafür den rest_server, da sind schon ein paar Einträge für die Authors-App vorhanden.
Es ist euch überlassen, ob Ihr $http oder ngResource nutzt
URL: http://127.0.0.1:8081/api/v1/author
Methode: GET

Fehler Behandlung könnte Ihr für jetzt ignorieren.

(2)
Vorbereitungen für Routing:
Beim Laden soll die Suchfunktion und die Autorenliste unter der Haupt-Route (/) zu finden sein.
Ihr musst dafür die Hauptkomponente anpassen damit sie "ng-view" nutzt und den Router ($routeProvider) konfigurieren.

(3)
Wenn der Nutzer auf das delete-Icon klickt soll der Autor gelöscht werden (Vom Server und der Autorenliste)
URL: http://127.0.0.1:8081/api/v1/author/:id wobei :id die Eigentliche _id des Autors ist.
Methode: DELETE
Fehler Behandlung könnte Ihr für jetzt ignorieren.

(4)
Wenn der Nutzer auf den Edit-Button für ein Autor oder auf den Plus-Button Klickt soll die App zu eine neue View
navigieren. Ihr braucht hierfür neue Komponenten. Die Komponenten werd in Teil 3 implementiert.

(5) Optional
Wer noch Zeit hat kann sich jetzt um die Fehlerbehandlung bei den asynchronen Serveraufrufen kümmern.

(6) Optional
Info anzeigen, dass Daten geladen werden.

Angular API Doku für die Version 1.5.0:
https://code.angularjs.org/1.5.0/docs/api/ng

Folgende Module wurden in der Lösung verwendet:
ngRoute
(import ngRoute from 'angular-route';)

Folgende Direktiven wurden in der Lösung verwendet:
ng-view

Folgende Services wurden in der Lösung verwendet:
$routeProvider
$location
$http
