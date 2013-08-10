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
      'click button' : 'save'
    },

    save: function () {
      var text = this.$el.find('textarea').val();
      this.model.save({content: text});
    },

    serialize: function () {
      return this.model.toJSON();
    }

  });

  return View;

});
