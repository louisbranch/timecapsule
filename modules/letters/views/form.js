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

    save: function () {
      var data = this.data();
      this.model.save(data);
    },

    send: function () {
      this.save();
      this.model.send();
    },

    serialize: function () {
      return this.model.toJSON();
    },

    data: function () {
      var content = this.$el.find('textarea').val();
      return {
        content: content
      };
    }

  });

  return View;

});
