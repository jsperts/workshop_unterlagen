'use strict';

// Der Kommentar dokumentiert den Code -> Kann von JSDoc geparset werden
/**
 * Represents a person
 * @constructor
 * @param {string} [name] - The name of the person
 * @param {string} [birthDate] - The birth date of the person
 */
function Person(name, birthDate) {
  this.name = name || '';
  this.birthDate = birthDate || '01.01.1970';
}

/** @returns {Number} */
Person.prototype.calculateAge = function() {
  var currentYear = new Date().getFullYear();
  var birthYear = new Date(this.birthDate).getFullYear();
  return currentYear - birthYear;
};

Person.prototype.printAgeAndName = function() {
  var age = this.calculateAge();
  console.log('Name:', this.name, 'Age:', age);
};

