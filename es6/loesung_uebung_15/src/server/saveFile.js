import fs from 'fs';

export default function saveFile(pathToFile, data) {
  try {
    const transformedData = data
      .map((entry) => JSON.stringify(entry))
      .join('\n');
    // synchronous write to avoid parallel writes
    fs.writeFileSync(pathToFile, transformedData, 'utf8');
    // Datei geschrieben
    return '{"status":"ok"}';
  } catch (err) {
    console.log('Error occurred:', err);
    return '{"error": true}\n';
  }
}
