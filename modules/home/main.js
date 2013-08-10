/*
 * Router for home/index section
 */
define([
  'backbone',
  'home/views/index'
], function (
  Backbone,
  IndexView
) {

  var Router = Backbone.Router.extend({

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    routes: {
      '' : 'home'
    },

    home: function () {
      var view = new IndexView();
      this.mediator.trigger('render', {view: view, url: '/'});
    }

  });

  return Router;

});
