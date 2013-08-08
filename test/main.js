requirejs.config({
  baseUrl: '/modules',
  paths: {
    jquery: '/components/jquery/jquery',
    backbone: '/components/backbone/backbone',
    bootstrap: '/components/bootstrap/dist/js/bootstrap',
    underscore: '/components/underscore/underscore',
    layoutmanager: '/components/layoutmanager/backbone.layoutmanager',
    test: '/test'
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

