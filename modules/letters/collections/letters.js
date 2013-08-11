/*
 * Letter Collection
 */
define([
  'backbone',
  'letters/models/letter',
  'localStorage'
], function (
  Backbone,
  Letter
) {

  var Collection = Backbone.Collection.extend({

    model: Letter,

    localStorage: new Backbone.LocalStorage('letters'),

    url: '/letters',

    initialize: function () {
      this.fetch();
    }

  });

  return Collection;

});

