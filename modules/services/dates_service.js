define(function () {

  var months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  /*
   * Create an object with day, month and
   * year from a date
   */
  function format (date) {
    var n = date.getUTCMonth() - 1;
    return {
      day: date.getUTCDate(),
      month: months[n],
      year: date.getUTCFullYear()
    };
  }

  return {
    format: format
  };

});
