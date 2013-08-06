/*
 * Index View
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
      this.$el.html('<h1>Index</h1>');
    }

  });

  return View;

});

