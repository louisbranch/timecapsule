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

    initialize: function (attrs, options) {
      this.mediator = options.mediator;
      this.setColor();
    },

    /* Default model attributes */
    defaults: {
      title: '',
      content: '',
      day: '',
      month: '',
      year: ''
    },

    fields: function () {
      return Object.keys(this.defaults);
    },

    /* Validate blank attributes */
    validate: function (attrs, options) {
      var errors = [];
      this.fields().forEach(function (key) {
        if (!attrs[key].length) errors.push('blank ' + key);
      });
      if (errors.length) return errors;
    },

    /*
     * Save model if it is valid to the server
     * using default Backbone sync method
     */
    send: function (data) {
      if (!this.isValid()) return;
      Backbone.ajaxSync('create', this);
    },

    /*
     * Generates a random color unless
     * model already has one
     */
    setColor: function () {
      var color = this.get('color');
      if (color) return;
      this.mediator.require('color', function (service) {
        color = service.hsv();
      });
      this.save({color: color});
    }

  });

  return Model;

});
