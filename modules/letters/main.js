/*
 * Router for letters section
 */
define([
  'backbone',
  'letters/views/form'
], function (
  Backbone,
  FormView
) {

  var Router = Backbone.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    routes: {
      'letters/new' : 'form'
    },

    form: function () {
      var view = new FormView();
      this.mediator.trigger('render', view);
    }

  });

  return Router;

});
