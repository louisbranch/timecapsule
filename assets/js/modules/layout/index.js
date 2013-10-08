/*
 * Application Skeleton Layout
 */
define([
  "app",
  "jquery",
  "modules/layout/views/navbar",
  "modules/layout/views/menu",
  "modules/layout/views/content"
], function (
  App,
  $,
  NavbarView,
  MenuView,
  MainContentView
) {

  return App.View.extend({

    id: "main-layout",

    initialize: function (options) {
      this.navigation = new NavbarView({mediator: this.mediator});
      this.mobileMenu = new MenuView({mediator: this.mediator});
      this.mainContent = new MainContentView({mediator: this.mediator});
    },

    beforeRender: function () {
      $(".wrap").hide();
      this.insertViews({
        "": [this.navigation, this.mobileMenu, this.mainContent]
      });
    }

  });

});
