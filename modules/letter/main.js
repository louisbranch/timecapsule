define(['jquery', 'backbone'], function ($, Backbone) {

  var Router = Backbone.Router.extend({

    routes: {
      'letters/new' : 'form'
    },

    form: function () {
      console.log('LETTER!');
    }

  });

  return Router;

});
