/*
 * Main menu for mobile devices
 */
define([
  "underscore",
  "backbone",
  "text!app/templates/menu.html"
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
      this.listenTo(this.mediator, "mobile:menu", this.toggleMenu);
    },

    toggleMenu: function () {
      this.$el.find("nav .menu").animate({width: "toggle"}, 50);
    }

  });

  return View;

});
