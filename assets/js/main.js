requirejs([
  "backbone",
  "modules/mediator/index",
  "modules/layout/index",
  "modules/home/index",
  "modules/letters/index",
  "modules/services/index"
], function (
  Backbone,
  Mediator,
  Layout,
  Home,
  Letters,
  services
) {

  /*
   * Events mediator to communicate
   * between modules
   */
  var mediator = new Mediator();

  /*
   * Load Services
   */
  services.load(mediator);

  /*
   * Load Modules
   */
  new Home({mediator: mediator});
  new Letters({mediator: mediator});

  /*
   * Render initial app layout
   */
  if (window.BOOTSTRAP) {
    var layout = new Layout({mediator: mediator});
    layout.$el.appendTo("body");
    layout.render();
  }

  Backbone.history.start({pushState: true});

  //TODO remove
  mediator.on("all", function () {
    console.log(arguments);
  });

});
