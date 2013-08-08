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
    },

    events: {
    },

    serialize: function () {
      return this.model.toJSON();
    }

  });

  return View;

});


