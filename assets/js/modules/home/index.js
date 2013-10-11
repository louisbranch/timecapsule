/*
 * Home module router
 */
define([
  "app"
], function (
  App
) {

  return App.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    routes: {
      "" : "index"
    },

    index: function () {
      if (window.user) {
        this.mediator.trigger("navigate", "/letters");
        return;
      }
    }

  });

});
