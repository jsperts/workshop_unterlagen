'use strict';

var personCounter = 0;

function PersonClass(n, date, color) {
  this.id = personCounter + 1;
  // Name
  this.n = n;
  // Birth Date
  this.date = date;
  // Hair Color
  this.color = color;
}

function AllPersonsInTheWorld() {
  this.apitwArr = [];
}

AllPersonsInTheWorld.prototype.addOrUpdatePerson = function(p) {
  var length = this.apitwArr.length;
  var found = false;
  for (var i = 0; i < length; i++) {
    if (p.id === this.apitwArr[i].id) {
      this.apitwArr[i] = p;
      found = true;
      break;
    }
  }
  if (!found) {
    this.apitwArr.push(p);
  }
};

AllPersonsInTheWorld.prototype.getPerson = function(id) {
  return this.apitwArr.filter(function(p) {
    return p.id === id;
  })[0];
};

