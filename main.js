requirejs.config({
  baseUrl: '/modules',
  paths: {
    jquery: '/components/jquery/jquery',
    backbone: '/components/backbone/backbone',
    lodash: '/components/lodash/lodash'
  },
  shim: {
    lodash: {
      exports: '_'
    },
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    }
  }
});

requirejs([
  'lodash',
  'backbone',
  'letter/main'
], function (
  _,
  Backbone,
  Letter
) {

  new Letter();
  Backbone.history.start({pushState: true});

});
