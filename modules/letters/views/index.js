/*
 * Letters Index View
 */
define([
  'backbone',
  'letters/views/item',
  'text!letters/templates/index.html'
], function (
  Backbone,
  ItewView,
  template
) {

  var View = Backbone.View.extend({

    template: template,

    initialize: function () {
      this.listenTo(this.collection, 'change', this.render);
    },

    beforeRender: function () {
      this.collection.each(function (model) {
        this.insertView('ul', new ItewView({model: model}));
      }, this);
    }

  });

  return View;

});

