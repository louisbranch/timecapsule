/*
 * Application Skeleton Layout
 */
define([
  "app",
  "jquery",
  "modules/layout/views/header",
  "modules/layout/views/mobile_menu",
  "modules/layout/views/main_content"
], function (
  App,
  $,
  Header,
  MobileMenu,
  MainContent
) {

  return App.View.extend({

    id: "main-layout",

    initialize: function () {
      this.header = new Header({mediator: this.mediator});
      this.mobile = new MobileMenu({mediator: this.mediator});
      this.main = new MainContent({mediator: this.mediator});

      this.mediator.require("autoLinks", function (service) {
        service.enable();
      });

      this.mediator.require("authentication", function (service) {
        service.enable();
      });
    },

    beforeRender: function () {
      $(".wrap").hide();
      this.insertViews({
        "": [this.header, this.mobile, this.main]
      });
    }

  });

});
