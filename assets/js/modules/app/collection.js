/*
 * Extends Backbone.Collection
 */
define([
  "backbone"
], function (
  Backbone
) {

  return Backbone.Collection.extend({

    constructor: function (models, options) {
      options = options || {};
      if (options.mediator) this.mediator = options.mediator;
      Backbone.Collection.prototype.constructor.call(this, models, options);
    },

    /* Add mediator and player to all models initialization */
    _prepareModel: function (attrs, options) {
      options = options || {};
      if (this.mediator) options.mediator = this.mediator;
      return Backbone.Collection.prototype._prepareModel.call(this, attrs, options);
    }

  });

});
