/*
 * Application Skeleton Layout
 */
define([
  "app",
  "text!modules/layout/templates/layout.html",
  "modules/layout/views/navbar",
  "modules/layout/views/menu"
], function (
  App,
  template,
  NavbarView,
  MenuView
) {

  return App.View.extend({

    template: template,

    initialize: function (options) {
      this.mediator = options.mediator;

      /*
       * Render view inside app layout as
       * content root or inside custom selector
       */
      this.mediator.on("render", function (options) {
        if (!options || !options.view) new Error("Render options required");
        options.root = options.root || "#main";
        this.activateUrl(options.url);
        this.setView(options.root, options.view.render());
      }, this);

      /* Enable autolinks */
      this.mediator.require("autoLinks", function (service) {
        service.enable(options.mediator);
      });

      /* Slide main content for mobile menu */
      this.listenTo(this.mediator, "mobile:menu", this.slideContent);
    },

    /*
     * Change navigation active link when a
     * section renders
     */
    activateUrl: function (url) {
      this.$el
        .find(".nav li")
        .removeClass("active");

      if (!url) return;
      this.$el
        .find("a[href='"+ url  +"']")
        .closest("li")
        .addClass("active");
    },

    /* Slide main content when menu is opened */
    slideContent: function () {
      var left, right;
      var main = this.$el.find("#main");
      if (main.hasClass("mobile-menu")) {
        left = right = "0px";
      } else {
        left = "85%";
        right = "-85%";
      }
      main.animate({marginRight: right, marginLeft: left}, 50);
      main.toggleClass("mobile-menu");
    },

    beforeRender: function () {
      this.setView("#navbar", new NavbarView({mediator: this.mediator}));
      this.setView("#menu", new MenuView({mediator: this.mediator}));
    }

  });

});
