requirejs([
  'backbone',
  'layoutmanager',
  'mediator/main',
  'app/main',
  'letters/main',
  'services/services'
], function (
  Backbone,
  Layout,
  Mediator,
  App,
  Letter,
  services
) {

  /*
   * Set all Backbone Views as manageable
   * by LayoutManager
   */
  Layout.configure({
    manage: true,
    el: false
  });

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
  new Letter({mediator: mediator});

  /*
   * Render initial app layout
   */
  var app = new App({mediator: mediator});
  app.$el.appendTo('body');
  app.render();

  Backbone.history.start({pushState: true});

  //TODO remove
  mediator.on('all', function () {
    console.log(arguments);
  });

});
