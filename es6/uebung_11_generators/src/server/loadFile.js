import Promise from 'bluebird';
import fs from 'fs';
Promise.promisifyAll(fs);

import asyncGenerator from './asyncGenerator';

function* loadFile(pathToFile, transform) {
  try {
    const data = yield fs.readFileAsync(pathToFile, 'utf8');
    // Datei eingelesen
    return transform(data);
  } catch (err) {
    console.log('Error occurred:', err);
    return '{"error": true}\n';
  }
}

export default asyncGenerator(loadFile);
