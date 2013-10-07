/*
 * Extends Backbone.Router
 */
define([
  "backbone"
], function (
  Backbone
) {

  return Backbone.Router.extend({

    constructor: function (options) {
      options = options || {};
      if (options.mediator) this.mediator = options.mediator;
      Backbone.Router.prototype.constructor.call(this, options);
    }

  });

});
