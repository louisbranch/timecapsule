/*
 * Extends all base Backbone base classes
 * adding Timecapsule initializer boilerplate
 */
define([
  "modules/app/model",
  "modules/app/collection",
  "modules/app/router",
  "modules/app/view"
], function (
  Model,
  Collection,
  Router,
  View
) {

  return {
    Model: Model,
    Collection: Collection,
    Router: Router,
    View: View
  };

});
