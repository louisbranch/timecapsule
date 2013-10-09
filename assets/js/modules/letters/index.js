/*
 * Letters module router
 */
define([
  "app",
  "modules/letters/collections/letters",
  "modules/letters/models/letter",
  "modules/letters/views/index",
  "modules/letters/views/form"
], function (
  App,
  Letters,
  Letter,
  IndexView,
  FormView
) {

  return App.Router.extend({

    initialize: function (options) {
      this.collection = new Letters([], {mediator: this.mediator});
      this.collection.fetch();
    },

    routes: {
      "letters"     : "index",
      "letters/new" : "create",
      "letters/:id" : "show"
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

    show: function (id) {
      var model = this.collection.get(id);
      this.form(model);
    },

    form: function (model, url) {
      var view = new FormView({model: model});
      this.mediator.trigger("render", {view: view, url: url});
    }

  });

});
