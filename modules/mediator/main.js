define([
  'underscore',
  'backbone'
], function (
  _,
  Backbone
) {

  function Mediator () {
    _.extend(this, Backbone.Events);
  }

  Mediator.prototype.navigate = function (path) {
    Backbone.history.navigate(path, true);
  };

  Mediator.prototype.start = function () {
    Backbone.history.start({pushState: true});
  };

  return Mediator;

});

