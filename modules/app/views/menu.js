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

  return View;

});
