'use strict';

// Der Kommentar dokumentiert den Code -> Kann von JSDoc geparset werden
/**
 * Represents a person
 * @constructor
 * @param {string} name - The name of the person
 * @param {string} birthDate - The birth date of the person
 */
class Person {
  constructor(name = '', birthDate = '01.01.1970') {
    this.name = name;
    this.birthDate = birthDate;
  }

  /** @returns {Number} */
  calculateAge() {
    var currentYear = new Date().getFullYear();
    var birthYear = new Date(this.birthDate).getFullYear();
    return currentYear - birthYear;
  }

  printAgeAndName() {
    var age = this.calculateAge();
    console.log('Name:', this.name, 'Age:', age);
  }
}
