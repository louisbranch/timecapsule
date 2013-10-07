/*
 * Letters module router
 */
define([
  "backbone",
  "letters/collections/letters",
  "letters/models/letter",
  "letters/views/index",
  "letters/views/form"
], function (
  Backbone,
  Letters,
  Letter,
  IndexView,
  FormView
) {

  var Router = Backbone.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
      this.collection = new Letters([], {mediator: this.mediator});
      this.collection.fetch();
    },

    routes: {
      "letters"     : "index",
      "letters/new" : "create",
      "letters/:id" : "update"
    },

    index: function () {
      this.collection.fetch();
      var view = new IndexView({collection: this.collection});
      this.mediator.trigger("render", {view: view, url: "/letters"});
    },

    create: function () {
      var model = new Letter(null, {mediator: this.mediator});
      this.collection.add(model);
      this.form(model, "/letters/new");
    },

    update: function (id) {
      var model = this.collection.get(id);
      this.form(model);
    },

    form: function (model, url) {
      var view = new FormView({model: model});
      this.mediator.trigger("render", {view: view, url: url});
    }

  });

  return Router;

});
