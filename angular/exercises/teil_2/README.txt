(1)
Passt den MainCtrl und den DataService an, so dass die nicht mehr statische Daten benutzen. Stattdessen sollen die
Daten vom Server geladen werden.
Nutzt hierfür den gegebenen rest_server und die URL http://127.0.0.1:8080/api/v1/author mit der GET Methode.
Fehler Behandlung könnte Ihr für jetzt ignorieren.

(2)
Die Suchfunktion und die Autorenliste sollen nicht mehr in der index.html Datei sein sondern in eine Datei im views
Verzeichnis. Damit man beim laden die Autorenlist und Suchfunktion weiterhin sieht solltet Ihr eine Route dafür
anlegen in dem Ihr eine Datei im config Verzeichnis erstellt und dort den $routeProvider konfiguriert.
Der MainCtrl soll jetzt nicht mehr in der index.html Datei sein. Er soll mit hilfe des $routeProviders geladen werden
 (controllerAs funktioniert auch hier).

(3)
Wenn der Nutzer auf das delete-Icon klickt soll der Autor gelöscht werden (Vom Server und der Autorenliste)
Nutzt hierfür die URL http://127.0.0.1:8080/api/v1/author/:id wobei :id die Eigentliche _id des Autors ist.
Nutzt die DELETE Methode.
Fehler Behandlung könnte Ihr für jetzt ignorieren.

(4)
Wenn der Nutzer auf den Edit-Button für ein Autor oder auf den Plus-Button Klickt soll die App zu eine neue View
navigieren. Legt eine neue Datei für die View an und ein registriert eine neuen Controller dafür. Die View wird in
Teil 3 implementiert damit der Nutzer ein neuen Autor hinzufügen kann bzw. ein existierenden Autor ändern kann.

(5) Optional
Wer noch Zeit hat kann sich jetzt um die Fehlerbehandlung bei den asynchronen Serveraufrufen kümmern.

AngularJS API Doku für die Version 1.3.15:
https://code.angularjs.org/1.3.15/docs/api/ng

Folgende Module wurden in der Lösung verwendet:
ngRoute

Folgende Direktiven wurden in der Lösung verwendet:
ng-view

Folgende Services wurden in der Lösung verwendet:
$routeProvider
$location
$q
$http
