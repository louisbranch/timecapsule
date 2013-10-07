/*
 * Letter Collection
 */
define([
  "app",
  "modules/letters/models/letter",
  "localStorage"
], function (
  App,
  Letter,
  Backbone
) {

  return App.Collection.extend({

    model: Letter,

    localStorage: new Backbone.LocalStorage("letters"),

    url: "/letters",

    initialize: function (models, options) {
      this.mediator = options.mediator;
    },

    comparator: function (model) {
      return model.get("date");
    }

  });

});
