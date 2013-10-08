define(function () {

  var MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  /*
   * Create an object with day, month and
   * year from a date
   */
  function Data (date) {
    this.date = date;
  }

  Data.prototype.format = function () {
    var n = this.date.getMonth() - 1;
    return {
      day: this.date.getDate(),
      month: MONTHS[n],
      year: this.date.getFullYear()
    };
  };

  return Data;

});
