'use strict';

var fs = require('fs');

function manipulateFile(oldFile, newFile) {
  if (oldFile !== undefined && oldFile !== '' && newFile !== undefined && newFile !== '') {
    try {
      var contents = fs.readFileSync(oldFile, {encoding: 'utf8'});
      var lines = contents.split('\n');
      lines = lines.map(function(line, index) {
        return index + ' ' + line;
      });
      var newContent = lines.join('\n');
      // Alternativ
      //var newContent = contents.split('\n').map(function(l, i) {return i + ' ' + line;}).join('\n');
      fs.writeFileSync(newFile, newContent);
    } catch(e) {
      console.log(e);
    }
  }
}

var oldFileName = 'testFile.txt';
var newFileName = 'newFile.txt';
manipulateFile(oldFileName, newFileName);

