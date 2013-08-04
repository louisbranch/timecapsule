define(['jquery', 'backbone'], function ($, Backbone) {

  var Main = Backbone.View.extend({

    render: function () {
      $('body').append('<h1>Letter</h1>');
    }

  });

  return Main;

});
