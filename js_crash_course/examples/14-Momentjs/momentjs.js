(function(moment) {
  'use strict';

  // Moment.js Doku: http://momentjs.com/docs

  var dateObject = moment('2020-01-20T00:00:00.000Z');
  console.log(dateObject.format('DD.MM.YYYY')); // '20.01.2020'

  dateObject.add(1, 'd'); // plus 1 Tag
  console.log(dateObject.format('YYYY.DD.MM')); // '2020.21.01'

  console.log(dateObject.month()); // 0 --> genau wie bei JS-Date

  dateObject.isBefore('2010-01-30T00:00:00.000Z'); // false
})(moment);
