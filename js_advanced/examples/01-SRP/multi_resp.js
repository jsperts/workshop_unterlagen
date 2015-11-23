'use strict';
var fs = require('fs');

/*
 * Die Funktion hat mehrere Aufgaben
 * 1) Öffnet eine Datei
 * 2) Konkateniert ein String
 * 3) Schreibt eine neue Datei
 */
function manipulateFile(fileName, toAppend, newFile) {
  var contents = fs.readFileSync(fileName, {encoding: 'utf8'});
  var newContent = contents + '\n' + toAppend;
  fs.writeFileSync(newFile, newContent);
}

manipulateFile('testFile.txt', 'I will be appended', 'newFile.txt');

/*
 * Die Funktion hat mehrere Domänen
 * 1) Geht durch eine Liste
 * 2) Konstruiert den Namen einer Person
 */
function iterateAndManipulate(listOfPersons) {
  for (var i = 0; i < listOfPersons.length; i++) {
    var person = listOfPersons[i];
    person.fullName = person.firstName + ' ' + person.lastName;
  }
}

