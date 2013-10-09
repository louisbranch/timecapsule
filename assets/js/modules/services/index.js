define([
 "underscore",
 "modules/services/authentication",
 "modules/services/auto_links",
 "modules/services/color_service",
 "modules/services/dates_service",
 "modules/services/navigator"
], function (
  _,
  authentication,
  autoLinks,
  color,
  dates,
  nav
) {

  var services = {
    authentication: authentication,
    autoLinks: autoLinks,
    color: color,
    dates: dates,
    nav: nav
  };

  function load(mediator) {
    _.each(services, function (Service, name) {
      var service = new Service(mediator);
      mediator.define(name, service);
    });
  }

  return { load: load };

});
