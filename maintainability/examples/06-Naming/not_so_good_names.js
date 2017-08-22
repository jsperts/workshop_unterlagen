'use strict';

var personCounter = 0;

class PersonClass {
  constructor(n, date, color) {
    this.id = personCounter + 1;
    // Name
    this.n = n;
    // Birth Date
    this.date = date;
    // Hair Color
    this.color = color;
  }
}

class AllPersonsInTheWorld {
  constructor() {
    this.apitwArr = [];
  }

  addOrUpdatePerson(p) {
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
  }

  getPerson(id) {
    return this.humanity.find((p) => p.id === id);
  }
}
