define([
 'services/color_service',
 'services/lights_service',
 'services/auto_links_service'
], function (
  Color,
  Lights,
  AutoLinks
) {

  function load(mediator) {
    [Color, Lights, AutoLinks].forEach(function (service) {
      new service({mediator: mediator});
    });
  }

  return { load: load };

});
