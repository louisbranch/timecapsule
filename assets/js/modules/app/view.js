/*
 * Extends Backbone.View
 */
define([
  "backbone",
  "layoutmanager",
  "underscore"
], function (
  Backbone,
  LayoutManager,
  _
) {

  LayoutManager.configure({
    manage: true, // Set all Backbone Views as manageable by LayoutManager
    el: false, // Views doesn't use Backbone div as root

    /* Render views using Handlebars if they have a context */
    renderTemplate: function (template, context) {
      if (!context) return template();
      return _.template(template(), context);
    }
  });

  return Backbone.View.extend({

    constructor: function (options) {
      options = options || {};
      if (options.mediator) this.mediator = options.mediator;
      Backbone.View.prototype.constructor.call(this, options);
    }

  });

});

