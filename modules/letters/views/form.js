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

    template: template,

    events: {
      'click button' : 'save'
    },

    save: function () {
      this.model.save();
    }

  });

  return View;

});
