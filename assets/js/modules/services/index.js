define([
 "underscore",
 "modules/services/color_service",
 "modules/services/dates_service",
 "modules/services/auto_links_service",
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
      mediator.define(name, service);
    });
  }

  return { load: load };

});
