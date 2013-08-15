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
      '/components/requirejs-text/text',
    test:
      '/test',
    mocha:
      '/components/mocha/mocha',
    chai:
      '/components/chai/chai'
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
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    }
  }
});

require(['mocha', 'chai'], function (mocha, chai) {

  mocha.setup({
    ui: 'tdd',
    timeout: 1000
  });

  window.assert = chai.assert;

  require([
    'test/modules/app/main',
    'test/modules/services/services',
    'test/modules/services/dates_service',
    'test/modules/services/color_service',
    'test/modules/services/auto_links_service'
  ], function () {

    if (window.mochaPhantomJS) mochaPhantomJS.run();
    else mocha.run();

  });

});
