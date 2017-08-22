## Vorbereitung

* Node.js installieren
  * Node.js Downloads: https://nodejs.org/dist/latest/
  * Node Version Manager für MacOS und Linux: https://github.com/creationix/nvm
  * Node Version Manager für Windows: https://github.com/coreybutler/nvm-windows
* Projektabhängigkeiten installieren
  * `npm install`
* Webserver starten (hat auch ein watcher und baut die Anwendung neu bei Änderungen)
  * `npm start`
* eslint
  * `npm run lint` oder
  * `npm run lint:fix`
* Anwendung bauen (Resultat ist in ./dist)
  * `npm run build`
  * `npm run build-prod`

## Übung Teil 1

### Critical Rendering Path Optimierung

1) Das Ladeverhalten 2-3 Seiten mit Hilfe von DevTools und webpagetest.org unter die Lupe nehmen. Was könnte man da verbessern?
2) Das Ladeverhalten der Beispielanwendung analysieren
3) Testen was passiert, wenn das Netzwerk langsam ist
4) Wie ändert sich das Ladeverhalten wenn die Reihenfolge von script-/link-Tags sich ändert?
5) Das Ladeverhalten der Beispielanwendung optimieren
6) Optional: Wie lange brauchen die Bilder bis sie angezeigt werden können?
7) Optional: Wie können wir die Bilder-Ladezeit optimieren?
8) Optional: Webpack-bundle-analyzer nutzen (https://www.npmjs.com/package/webpack-bundle-analyzer)

### Links:

* https://github.com/ampedandwired/html-webpack-plugin
* https://github.com/webpack/css-loader
* https://github.com/webpack-contrib/style-loader
* https://github.com/webpack/extract-text-webpack-plugin
* https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin (Doku für Webpack 1)

* CSS-Minimieren braucht folgenden Code als Plugin

```
new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
})
```

### Lösung: in part_2

## Übung Teil 2

### Laufzeitoptimierung

1) Detailsansicht optimieren:
   * öffnen/schließen
   * Details soll nur einmal im DOM sein
2) Scrolling optimieren. Ist die Animation beim hover nötig? Hat die für den Nutzer ein Mehrwert?
3) Selektoren optimieren. Auch in Hinsicht auf Wartbarkeit. Was muss jetzt gemacht werden um ein größeres Bild in der Detailansicht zu haben?
4) Kann man auch andere Aspekte der Anwendung optimieren?
5) Optional: Wartbarkeit der Anwendung optimieren. Teilweise sind die Views zu groß/machen zuviel. Sind sie auch wirklich dafür verantwortlich?
6) Optional: Code Review

### Lösung: in solution
