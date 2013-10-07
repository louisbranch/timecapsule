/*
 * Home module router
 */
define([
  "app",
  "modules/home/lib/auth"
], function (
  App,
  auth
) {

  return App.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    routes: {
      "" : "index"
    },

    index: function () {
      auth(this.mediator);
    }

  });

});
