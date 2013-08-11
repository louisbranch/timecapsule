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
      'letters/new' : 'create',
      'letters/:id' : 'update'
    },

    index: function () {
      this.collection.fetch();
      var view = new IndexView({collection: this.collection});
      this.mediator.trigger('render', {view: view, url: '/letters'});
    },

    create: function () {
      this.form(null, '/letters/new');
    },

    update: function (id) {
      this.form(id);
    },

    form: function (id, url) {
      var model;
      if (id) model = this.collection.get(id);
      else    model = this.collection.create({});
      var view = new FormView({model: model});
      this.mediator.trigger('render', {view: view, url: url});
    }

  });

  return Router;

});
