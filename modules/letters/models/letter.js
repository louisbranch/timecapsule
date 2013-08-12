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
      this.mediator = this.collection.mediator;
      this.setColor();
    },

    /* Default model attributes */
    defaults: {
      title: '',
      content: ''
    },

    /* Validate blank attributes */
    validate: function (attrs, options) {
      if (!attrs.title.length) return ('blank title');
      if (!attrs.content.length) return ('blank content');
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
      this.mediator.use('color', function (service) {
        color = service.random();
      });
      this.save({color: color});
    }

  });

  return Model;

});
