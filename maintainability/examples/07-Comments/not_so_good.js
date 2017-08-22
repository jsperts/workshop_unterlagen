'use strict';
/*
 * Class: Person
 */

/*
 * Function to define a Person
 * n is the name as a string
 * date is the birth date as a string
 */
class Person {
  constructor(n, date) {
    // The name cannot be undefined
    this.n = n || '';
    // Date must be a valid date string
    this.date = date || '01.01.1970';
  }

  // This function calculates the age of a person using the birth date
  // Returns the age of the person as a number
  // TODO: fixme
  calculateAge() {
    // Get current year
    var currentYear = new Date().getFullYear();
    // Get birth year
    var birthYear = new Date(this.birthDate).getFullYear();
    // Subtract birthYear from currentYear
    return currentYear - birthYear;
  }

  // This function prints the age and the name of a person using the console.log function
  print() {
    // get the age
    var age = this.calculateAge();
    console.log('Name:', this.n, 'Age:', age);
  }
}
