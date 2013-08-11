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

    /* Default model attributes */
    defaults: {
      content: ''
    },

    /* Validate blank content */
    validate: function (attrs, options) {
      if (!attrs.content.length) return ('blank content');
    },

    /*
     * Save model if it is valid to the server
     * using default Backbone sync method
     */
    send: function (data) {
      if (!this.isValid()) return;
      Backbone.ajaxSync('create', this);
    }

  });

  return Model;

});
