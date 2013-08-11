requirejs.config({
  baseUrl: '/modules',
  paths: {
    jquery:
      '/components/jquery/jquery',
    backbone:
      '/components/backbone/backbone',
    underscore:
      '/components/underscore/underscore',
    layoutmanager:
      '/components/layoutmanager/backbone.layoutmanager',
    localStorage:
      '/components/backbone.localStorage/backbone.localStorage',
    text:
      '/components/requirejs-text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    layoutmanager: {
      deps: ['backbone'],
      exports: 'Backbone.Layout'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

requirejs([
  'backbone',
  'layoutmanager',
  'mediator/main',
  'app/main',
  'home/main',
  'letters/main',
  'services/auto_links_service',
  'services/lights_service'
], function (
  Backbone,
  Layout,
  Mediator,
  App,
  Home,
  Letter,
  AutoLinksService,
  LightsService
) {

  /*
   * Set all Backbone Views as manageable
   * by LayoutManager
   */
  Layout.configure({
    manage: true
  });

  /*
   * Events mediator to communicate
   * between modules
   */
  var mediator = new Mediator();

  /*
   * Load Services
   */
  new AutoLinksService({mediator: mediator});
  new LightsService({mediator: mediator});

  /*
   * Load Modules
   */
  new Home({mediator: mediator});
  new Letter({mediator: mediator});

  /*
   * Render initial app layout
   */
  var app = new App({mediator: mediator});
  app.$el.appendTo('body');
  app.render();

  mediator.start();

  //TODO remove
  mediator.on('all', function () {
    console.log(arguments);
  });

});
