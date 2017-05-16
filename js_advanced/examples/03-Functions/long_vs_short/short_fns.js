'use strict';

var fs = require('fs');

/*
 * Jede Funktion hat eine Aufgabe
 */

function getContent(fileName) {
  return fs.readFileSync(fileName, { encoding: 'utf8' });
}

function addLineNumbers(content) {
  var lines = content.split('\n');
  lines = lines.map(function (line, index) {
    return index + ' ' + line;
  });
  return lines.join('\n');
}

function writeFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

function inputFilesValid(fileName, newFile) {
  var fileNameNotEmpty = fileName !== undefined && fileName !== '';
  var newFileNotEmpty = newFile !== undefined && newFile !== '';

  return fileNameNotEmpty && newFileNotEmpty;
}

function manipulateFile(oldFile, newFile) {
  if (inputFilesValid(oldFile, newFile)) {
    try {
      var content = getContent(oldFile);
      var newContent = addLineNumbers(content);
      writeFile(newFile, newContent);
    } catch (e) {
      console.log(e);
    }
  }
}

var oldFileName = 'testFile.txt';
var newFileName = 'newFile.txt';
manipulateFile(oldFileName, newFileName);
