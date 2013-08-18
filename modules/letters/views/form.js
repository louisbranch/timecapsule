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

    events: {
      'click #letter-send' : 'send',
      'submit form'        : 'save'
    },

    /* Save model locally with form data */
    save: function () {
      var data = this.data();
      this.model.save(data);
      return false;
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

    /*
     * For each model field, find its input
     * value
     */
    data: function () {
      var view = this.$el;
      var data = {};
      this.model.fields().forEach(function (attr) {
        var value = view.find('#letter-' + attr).val();
        data[attr] = value;
      });
      return data;
    }

  });

  return View;

});
