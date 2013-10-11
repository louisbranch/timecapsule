/*
 * Header View
 */
define([
  "app"
], function (
  App
) {

  return App.View.extend({

    template: "#main-header",

    initialize: function () {
      this.listenTo(this.mediator, "render", this.activateUrl);
    },

    events: {
      "click .toggle-topbar" : "toggleMenu",
      "click #login" : "login",
      "click #logout" : "logout"
    },

    toggleMenu: function () {
      this.mediator.trigger("mobile:menu");
      return false;
    },

    /*
     * Change navigation active link when a
     * section renders
     */
    activateUrl: function (options) {
      var url = options.url;
      this.$el
        .find(".nav li")
        .removeClass("active");

      if (!url) return;
      this.$el
        .find("a[href='"+ url +"']")
        .closest("li")
        .addClass("active");
    },

    login: function () {
      this.mediator.require("authentication", function (auth) {
        auth.login();
      });
    },

    logout: function () {
      this.mediator.require("authentication", function (auth) {
        auth.logout();
      });
      this.mediator.trigger("navigate", "/");
    }

  });

});
