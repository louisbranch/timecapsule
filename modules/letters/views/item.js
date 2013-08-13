/*
 * Letters Item View
 */
define([
  'underscore',
  'backbone',
  'text!letters/templates/item.html'
], function (
  _,
  Backbone,
  template
) {

  var View = Backbone.View.extend({

    template: _.template(template),

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    events: {
      'click .icon-rocket' : 'send',
      'click .icon-trash'  : 'destroy'
    },

    serialize: function () {
      return this.model.toJSON();
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

  return View;

});


