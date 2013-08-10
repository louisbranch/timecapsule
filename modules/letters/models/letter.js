/*
 * Letter Model
 */
define([
  'backbone',
  'localStorage'
], function (
  Backbone
) {

  var Model = Backbone.Model.extend({

    defaults: {
      content: ''
    }

  });

  return Model;

});
