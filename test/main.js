requirejs.config({
  baseUrl: "/assets/js/modules",
  paths: {
    jquery:
      "/assets/js/components/jquery/jquery",
    backbone:
      "/assets/js/components/backbone/backbone",
    underscore:
      "/assets/js/components/underscore/underscore",
    layoutmanager:
      "/assets/js/components/layoutmanager/backbone.layoutmanager",
    localStorage:
      "/assets/js/components/backbone.localStorage/backbone.localStorage",
    text:
      "/assets/js/components/requirejs-text/text",
    test:
      "/test",
    mocha:
      "/assets/js/components/mocha/mocha",
    chai:
      "/assets/js/components/chai/chai"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    layoutmanager: {
      deps: ["backbone"],
      exports: "Backbone.Layout"
    },
    mocha: {
      exports: "mocha"
    },
    chai: {
      exports: "chai"
    }
  }
});

require(["mocha", "chai"], function (mocha, chai) {

  mocha.setup({
    ui: "tdd",
    timeout: 1000
  });

  window.assert = chai.assert;

  require([
    "test/modules/app/main",
    "test/modules/services/services",
    "test/modules/services/dates_service",
    "test/modules/services/color_service",
    "test/modules/services/auto_links_service"
  ], function () {

    if (window.mochaPhantomJS) mochaPhantomJS.run();
    else mocha.run();

  });

});
