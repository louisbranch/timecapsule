/*
 * Extends Backbone.Model
 */
define([
  "backbone"
], function (
  Backbone
) {

  return Backbone.Model.extend({

    constructor: function (attrs, options) {
      options = options || {};
      if (options.mediator) this.mediator = options.mediator;
      Backbone.Model.prototype.constructor.call(this, attrs, options);
    }

  });

});
