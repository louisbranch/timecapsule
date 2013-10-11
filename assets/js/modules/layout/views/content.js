/*
 * Main Layout Content
 */
define([
  "app"
], function (
  App
) {

  return App.View.extend({

    id: "main-content",

    initialize: function () {
      this.listenTo(this.mediator, "render", this.changeContent);
      this.listenTo(this.mediator, "mobile:menu", this.slideContent);
    },

    /* Slide main content when menu is opened */
    slideContent: function () {
      var left, right;
      if (this.$el.hasClass("mobile-menu")) {
        left = right = "0px";
      } else {
        left = "85%";
        right = "-85%";
      }
      this.$el.animate({marginRight: right, marginLeft: left}, 50);
      this.$el.toggleClass("mobile-menu");
    },

    /*
     * Change main content nested view
     */
    changeContent: function (options) {
      if (!options || !options.view) new Error("Render options required");
      this.setView(options.view.render());
    }

  });

});
