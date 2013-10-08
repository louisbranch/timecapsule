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
  function Data (mediator) {
    this.mediator = mediator;
  }

  Data.prototype.format = function (date) {
    var n = date.getMonth() - 1;
    return {
      day: date.getDate(),
      month: MONTHS[n],
      year: date.getFullYear()
    };
  };

  return Data;

});
