## Vorbereitung

* Node.js installieren
  * Node.js Downloads: https://nodejs.org/dist/latest/
  * Node Version Manager für MacOS und Linux: https://github.com/creationix/nvm
  * Node Version Manager für Windows: https://github.com/coreybutler/nvm-windows
* Projektabhängigkeiten installieren
  * npm install
* Optional: typescript global installieren
  * npm install -g typescript
* Optional: tslint global installieren
  * npm install -g tslint

## Projekt bauen und Server starten

### Bauen

```bash
npm run build
```

oder (falls typescript global installiert ist)

```bash
tsc
```
### Bauen bei Dateiänderung

```bash
npm run watch
```

oder

```bash
tsc --watch
```

### Server starten

```bash
npm start
```

## tslint

```bash
npm run lint
```

oder (falls tslint global installiert ist)

```bash
tslint -c tslint.json app/*.ts
```
