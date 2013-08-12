/*
 * Letters form view
 */
define([
  'backbone',
  'text!letters/templates/form.html'
], function (
  Backbone,
  template
) {

  var View = Backbone.View.extend({

    template: _.template(template),

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    events: {
      'click .btn-default' : 'save',
      'click .btn-primary' : 'send'
    },

    /* Save model locally with form data */
    save: function () {
      var data = this.data();
      this.model.save(data);
    },

    /*
     * Save locally and send model to the
     * server
     */
    send: function () {
      this.save();
      this.model.send();
    },

    /* Serialize model attrs to template */
    serialize: function () {
      return this.model.toJSON();
    },

    /* Get and return form data */
    data: function () {
      var view = this.$el;
      var data = {};
      ['title', 'content'].forEach(function (attr) {
        var value = view.find('#letter-' + attr).val();
        data[attr] = value;
      });
      return data;
    }

  });

  return View;

});
