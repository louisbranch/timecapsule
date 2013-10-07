/*
 * Letters Item View
 */
define([
  "app",
  "text!modules/letters/templates/item.html"
], function (
  App,
  template
) {

  return App.View.extend({

    template: template,

    initialize: function () {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    events: {
      "click .icon-rocket" : "send",
      "click .icon-trash"  : "destroy"
    },

    serialize: function () {
      return this.model.present();
    },

    send: function () {
      this.model.send();
      return false;
    },

    destroy: function () {
      this.model.destroy();
      return false;
    }

  });

});


