/*
 * Main menu for mobile devices
 */
define([
  "app"
], function (
  App
) {

  return App.View.extend({

    template: "#main-mobile-menu",

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
