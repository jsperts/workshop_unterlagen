'use strict';

var fs = require('fs');

/*
 * Jede Funktion hat eine Aufgabe
 */

function getContent(fileName) {
  return fs.readFileSync(fileName, {encoding: 'utf8'});
}

function appendNewContent(content, newContent) {
  return content + '\n' + newContent;
}

function writeFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

function manipulateFile(fileName, toAppend, newFile) {
  var content = getContent(fileName);
  var newContent = appendNewContent(content, toAppend);
  writeFile(newFile, newContent);
}

manipulateFile('testFile.txt', 'I will be appended', 'newFile.txt');


/*
 * Eine Funktion geht durch die Liste.
 * Eine weitere Funktion konstruiert den Namen der Person
 */
function iterateAndManipulate(listOfPersons) {
  for (var i = 0; i < listOfPersons.length; i++) {
    var person = listOfPersons[i];
    person.fullName = getFullName(person);
  }
}

function getFullName(person) {
  return person.firstName + ' ' + person.lastName;
}
