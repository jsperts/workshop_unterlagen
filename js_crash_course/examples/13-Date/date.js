(function() {
  var dateObject = new Date();
  console.log(typeof dateObject); // 'object'

  // Achtung "new" wird gebraucht!
  var dateString = Date();
  console.log(typeof dateString); // 'string'

  var futureDate = new Date('2020.1.1');
  console.log(futureDate.getFullYear()); // 2020
  console.log(futureDate.getMonth()); // 0! --> Achtung: Monate fangen mit 0 an
  console.log(futureDate.getDate()); // 1

  var unixTimestamp = Date.now(); // Millisekunden seit 01.01.1970 00:00:00 UTC
})();
