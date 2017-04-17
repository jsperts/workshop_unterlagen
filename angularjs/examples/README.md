## Beispiele Transpilieren

* Webpack global installieren
  * npm install -g webpack
* Weitere Abhängigkeiten installieren (im Verzeichnis ./examples)
  * npm install
* Einzelne Beispiele Transpilieren
  * cd beispiel-verzeichnis
  * webpack --config ../webpack.config.js

## Beispiele sehen

* Im Verzeichnis ./examples
  * npm start

## Unit- und E2E-Tests

* Protractor (E2E) und karma (Unit) global installieren
  * npm install -g protractor
  * npm install -g karma-cli
* Im Verzeichnis ./examples/18-Tests
  * karma start karma_unit.conf.js
  * webdriver-manager update
  * protractor protractor.conf.js

Die Beispiele 08-Http und 09-NgResource brauchen ein Server, der Daten liefert
