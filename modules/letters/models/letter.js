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

    // Backbone.ajaxSync
    localStorage: new Backbone.LocalStorage('letters'),

    urlRoot: '/letters',

    defaults: {
      id: 1
    }

  });

  return Model;

});
