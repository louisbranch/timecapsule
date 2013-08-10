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

    },

    /*
     * Change navigation active link when a
     * section renders
     */
    activateUrl: function (url) {
      this.$el
        .find('.navbar li')
        .removeClass('active');

      if (!url) return;
      this.$el
        .find('a[href="'+ url  +'"]')
        .closest('li')
        .addClass('active');
    }

  });

  return App;
});
