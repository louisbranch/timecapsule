requirejs.config({
  baseUrl: "/assets/js",
  paths: {
    jquery:
      "components/jquery/jquery",
    backbone:
      "components/backbone/backbone",
    underscore:
      "components/underscore/underscore",
    layoutmanager:
      "components/layoutmanager/backbone.layoutmanager",
    localStorage:
      "components/backbone.localStorage/backbone.localStorage",
    text:
      "components/requirejs-text/text",
    test:
      "/test/assets/js",
    mocha:
      "components/mocha/mocha",
    chai:
      "components/chai/chai",
    sinon:
      "components/sinonjs/sinon"
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
    },
    sinon: {
      exports: "sinon"
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
    "test/modules/services/index",
    "test/modules/services/dates_service",
    "test/modules/services/color_service",
    "test/modules/services/auto_links"
  ], function () {

    if (window.mochaPhantomJS) mochaPhantomJS.run();
    else mocha.run();

  });

});
