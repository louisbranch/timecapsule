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
      this.mediator.on('render', function (view, root) {
        root = root || '#main';
        this.setView(root, view.render());
      }, this);

      /*
       * TODO
       * Change navigation active link when a
       * route changes
       */
    }

  });

  return App;
});
