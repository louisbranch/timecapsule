/*
 * Backbone navigaton wrapper
 */
define([
  "backbone"
], function (
  Backbone
) {

  function Nav (mediator) {
    this.mediator = mediator;
    this.mediator.on("navigate", this.navigate, this);
  }

  /* Trigger Backbone navigation across multiple routers */
  Nav.prototype.navigate = function (path) {
    Backbone.history.navigate(path, true);
  };

  return Nav;

});

