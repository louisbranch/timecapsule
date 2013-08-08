/*
 * Letters module router
 */
define([
  'backbone',
  'letters/collections/letters',
  'letters/models/letter',
  'letters/views/index',
  'letters/views/form'
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
      this.collection = new Letters();
    },

    routes: {
      'letters'     : 'index',
      'letters/new' : 'form',
      'letters/:id' : 'form'
    },

    index: function () {
      this.collection.fetch();
      var view = new IndexView({collection: this.collection});
      this.mediator.trigger('render', view);
    },

    form: function (id) {
      var model = new Letter({id: id}, {collection: this.collection});
      var view = new FormView({model: model});
      this.mediator.trigger('render', view);
    }

  });

  return Router;

});
