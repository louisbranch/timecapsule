define(function () {

  function Dates(options) {
    this.mediator = options.mediator;
    this.mediator.serve('date', this);
  }

  var months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  /* Return name of the month */
  Dates.prototype.display = function (date) {
    return {

    };
  };

  return Dates;

});


