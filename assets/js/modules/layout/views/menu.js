/*
 * Main menu for mobile devices
 */
define([
  "app",
  "text!modules/layout/templates/menu.html"
], function (
  App,
  template
) {

  return App.View.extend({

    template: template,

    initialize: function (options) {
      this.listenTo(this.mediator, "mobile:menu", this.toggleMenu);
    },

    events: {
      "click a" : "deactivate"
    },

    /*
     * Hide mobile menu after clicking
     * on a link
     */
    deactivate: function () {
      this.mediator.trigger("mobile:menu");
    },

    /* Animate menu slide in/out */
    toggleMenu: function () {
      this.$el.find("nav .menu").animate({width: "toggle"}, 50);
    }

  });

});
