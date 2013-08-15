/*
 * Application skeleton layout
 */
define([
  'layoutmanager',
  'text!app/templates/layout.html'
], function (
  Layout,
  template
) {

  var App = Layout.extend({

    template: template,

    initialize: function (options) {
      this.mediator = options.mediator;

      /*
       * Render view inside app layout as
       * content root or inside custom selector
       */
      this.mediator.on('render', function (options) {
        if (!options || !options.view) new Error('Render options required');
        options.root = options.root || '#main';
        this.activateUrl(options.url);
        this.setView(options.root, options.view.render());
      }, this);

      /* Enable autolinks */
      this.mediator.use('autoLinks', function (service) {
        service.enable(options.mediator);
      });

    },

    events: {
      'click #lights-switch' : 'lights'
    },

    /*
     * Change navigation active link when a
     * section renders
     */
    activateUrl: function (url) {
      this.$el
        .find('.nav li')
        .removeClass('active');

      if (!url) return;
      this.$el
        .find('a[href="'+ url  +'"]')
        .closest('li')
        .addClass('active');
    },

    lights: function () {
      this.mediator.use('lights', function (service) {
        service.toggle();
      });
    }


  });

  return App;
});
