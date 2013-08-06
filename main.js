requirejs.config({
  baseUrl: '/modules',
  paths: {
    jquery: '/components/jquery/jquery',
    backbone: '/components/backbone/backbone',
    bootstrap: '/components/bootstrap/dist/js/bootstrap',
    underscore: '/components/underscore/underscore',
    layoutmanager: '/components/layoutmanager/backbone.layoutmanager'
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
  'bootstrap',
  'mediator/main',
  'app/main',
  'home/main',
  'letters/main',
  'services/auto_links_service'
], function (
  Backbone,
  Boostrap,
  Mediator,
  App,
  Home,
  Letter,
  AutoLinks
) {

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
  new AutoLinks();

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
