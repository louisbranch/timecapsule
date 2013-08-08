/*
 * Index View
 */
define([
  'backbone',
  'text!home/templates/home.html'
], function (
  Backbone,
  template
) {

  var View = Backbone.View.extend({

    template: template

  });

  return View;

});

