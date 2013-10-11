/*
 * Letters Index View
 */
define([
  "app",
  "modules/letters/views/item",
  "text!modules/letters/templates/index.html"
], function (
  App,
  ItewView,
  template
) {

  return App.View.extend({

    template: template,

    initialize: function () {
      this.listenTo(this.collection, "reset", this.render);
      this.listenTo(this.collection, "change", this.render);
    },

    beforeRender: function () {
      this.collection.each(function (model) {
        this.insertView("ul", new ItewView({model: model}));
      }, this);
    }

  });

});
