/*
 * Home module router
 */
define([
  "backbone",
  "home/lib/auth"
], function (
  Backbone,
  auth
) {

  return Backbone.Router.extend({

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
