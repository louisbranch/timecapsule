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

  return Mediator;

});

