/*
 * Navigation bar view
 */
define([
  'underscore',
  'backbone',
  'text!app/templates/navbar.html'
], function (
  _,
  Backbone,
  template
) {

  var View = Backbone.View.extend({

    el: false,

    manage: true,

    template: _.template(template),

    initialize: function (options) {
      this.mediator = options.mediator;
    },

    events: {
      'click .toggle-topbar' : 'toggleMenu'
    },

    toggleMenu: function () {
      this.mediator.trigger('mobile:menu');
      return false;
    }

  });

  return View;

});

