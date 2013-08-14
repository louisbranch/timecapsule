define([
 'services/color_service',
 'services/dates_service',
 'services/auto_links_service',
], function (
  Color,
  Dates,
  AutoLinks
) {

  function load(mediator) {
    [Color, Dates, AutoLinks].forEach(function (service) {
      new service({mediator: mediator});
    });
  }

  return { load: load };

});
