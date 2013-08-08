/*
 * Letters module router
 */
define([
  'backbone',
  'letters/models/letter',
  'letters/views/form'
], function (
  Backbone,
  Letter,
  FormView
) {

  var Router = Backbone.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    routes: {
      'letters/new' : 'form',
      'letters/:id' : 'form'
    },

    form: function (id) {
      var model = new Letter({id: id});
      var view = new FormView({model: model});
      this.mediator.trigger('render', view);
    }

  });

  return Router;

});
