define([
 'underscore',
 'services/color_service',
 'services/dates_service',
 'services/auto_links_service',
], function (
  _,
  color,
  dates,
  autoLinks
) {

  var services = {
    color: color,
    dates: dates,
    autoLinks: autoLinks
  };

  function load(mediator) {
    _.each(services, function (service, name) {
      mediator.serve(name, service);
    });
  }

  return { load: load };

});
