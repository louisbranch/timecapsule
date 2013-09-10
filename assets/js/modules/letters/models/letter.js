/*
 * Letter Model
 */
define([
  'underscore',
  'backbone'
], function (
  _,
  Backbone
) {

  var Model = Backbone.Model.extend({

    initialize: function (attrs, options) {
      this.mediator = options.mediator || options.collection.mediator;
    },

    /* Default model attributes */
    defaults: {
      title: '',
      content: '',
      years: 1,
      date: ''
    },

    fields: function () {
      return Object.keys(this.defaults);
    },

    /* Validate blank attributes */
    validate: function (attrs, options) {
      var errors = [];
      this.fields().forEach(function (key) {
        if (!attrs[key]) errors.push('blank ' + key);
      });
      if (errors.length) return errors;
    },

    /*
     * Overwrite save function
     * and create a before save hook
     */
    save: function (attributes, options) {
      this.set(attributes);
      this.beforeSave();
      Backbone.Model.prototype.save.call(this, null, options);
    },

    /* Hook triggered before save action */
    beforeSave: function () {
      this.setColor();
      this.setDate();
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
        color = service.random();
      });
      this.set({color: color});
    },

    /*
     * Parse number of years in the future
     * and create a date from now adding
     * those years to it
     */
    setDate: function () {
      var years = parseInt(this.get('years'), 10);
      var now = new Date();
      var day = now.getDate();
      var month = now.getMonth();
      var year = now.getFullYear() + years;
      var date = new Date(year, month, day);
      this.set({date: date});
    },

    /*
     * Add formated values to toJSON
     * representation
     */
    present: function () {
      var json = this.toJSON();
      this.mediator.require('dates', function (service) {
        json.date = service.format(new Date(json.date));
      });
      json.color = _.values(json.color).join(',');
      return json;
    }

  });

  return Model;

});
