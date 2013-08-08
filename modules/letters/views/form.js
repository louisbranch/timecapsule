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
      var text = this.$el.find('textarea').val();
      this.model.save({content: text});
    }

  });

  return View;

});
