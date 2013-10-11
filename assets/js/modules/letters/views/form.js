/*
 * Letters form view
 */
define([
  "app",
  "text!modules/letters/templates/form.html"
], function (
  App,
  template
) {

  return App.View.extend({

    template: template,

    events: {
      "click #letter-save" : "save",
      "submit form"        : "save"
    },

    /* Save model locally with form data */
    save: function () {
      var data = this.data();
      this.model.save(data);
      return false;
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
        var value = view.find("#letter-" + attr).val();
        data[attr] = value;
      });
      return data;
    }

  });

});
