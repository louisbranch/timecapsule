requirejs.config({
  baseUrl: '/modules',
  paths: {
    jquery:
      '/components/jquery/jquery',
    backbone:
      '/components/backbone/backbone',
    bootstrap:
      '/components/bootstrap/dist/js/bootstrap',
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
  'bootstrap',
  'mediator/main',
  'app/main',
  'home/main',
  'letters/main',
  'services/auto_links_service'
], function (
  Backbone,
  Layout,
  Boostrap,
  Mediator,
  App,
  Home,
  Letter,
  AutoLinksService
) {

  /*
   * Set all Backbone Views as manageable
   * by LayoutManagar
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
   * Main app structure and layout
   */
  var app = new App({mediator: mediator});

  //TODO remove
  mediator.on('all', function () {
    console.log(arguments);
  });

  /*
   * Load Services
   */
  new AutoLinksService();

  /*
   * Load Modules
   */
  new Home({mediator: mediator});
  new Letter({mediator: mediator});

  /*
   * Render initial app layout
   */
  app.$el.appendTo('body');
  app.render();

  Backbone.history.start({pushState: true});

});
