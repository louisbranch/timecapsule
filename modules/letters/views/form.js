/*
 * Letters form view
 */
define([
  'jquery',
  'backbone'
], function (
  $,
  Backbone
) {

  var View = Backbone.View.extend({

    initialize: function () {
      this.$el.html('<h1>Letters</h1>');
    }

  });

  return View;

});
