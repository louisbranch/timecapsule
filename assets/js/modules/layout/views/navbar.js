/*
 * Navigation bar view
 */
define([
  'app',
  'text!modules/layout/templates/navbar.html'
], function (
  App,
  template
) {

  return App.View.extend({

    template: template,

    events: {
      'click .toggle-topbar' : 'toggleMenu'
    },

    toggleMenu: function () {
      this.mediator.trigger('mobile:menu');
      return false;
    }

  });

});

