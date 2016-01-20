(1)
Unit-Tests für die Anwendung schreiben
Mit "grunt test-unit" die Tests starten.

(2) Optional
Integration-Tests für die Anwendung schreiben.
Mit "grunt test-integration" die Tests starten.

(3) Optional
E2E-Tests für die Anwendung schreiben
Für den Test-Lauf:
HTTP-Server starten z. B. mit "grunt serve"
Rest-Server starten ggf. neustarten damit er die ursprüngliche Daten hat.
Mit "grunt test-e2e" die Tests starten.
Dieser Befehl installiert die neuste chrome-driver Version, startet den Selenium-Server und führt die Tests durch.

Angular API Doku für die Version 1.5.0:
https://code.angularjs.org/1.5.0/docs/api/ng

Folgende Module wurden in den Unit- und Integration-Tests verwendet:
ngMock

Folgende Services wurden in den Unit- und Integration-Tests verwendet:
$componentController (vom ngMock Modul, für das Testen von Controllern)
$compile (für das Testen von Direktiven)
$rootScope

Unit-/Integration-Tests:
Jasmine Doku: http://jasmine.github.io/2.0/introduction.html

E2E-Tests:
Protractor API: http://angular.github.io/protractor/#/api
