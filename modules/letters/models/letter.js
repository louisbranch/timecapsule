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
    },

    validate: function (attrs, options) {
      if (!attrs.content.length) return ('blank content');
    },

    send: function (data) {
      if (!this.isValid()) return;
      Backbone.ajaxSync('create', this);
    }

  });

  return Model;

});
