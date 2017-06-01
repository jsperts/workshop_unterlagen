import Promise from 'bluebird';
import fs from 'fs';
Promise.promisifyAll(fs);

async function loadFile(pathToFile, transform) {
  try {
    const data = await fs.readFileAsync(pathToFile, 'utf8');
    // Datei eingelesen
    return transform(data);
  } catch (err) {
    console.log('Error occurred:', err);
    return '{"error": true}\n';
  }
}

export default loadFile;
