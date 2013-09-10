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
    var n = date.getMonth() - 1;
    return {
      day: date.getDate(),
      month: months[n],
      year: date.getFullYear()
    };
  }

  return {
    format: format
  };

});
