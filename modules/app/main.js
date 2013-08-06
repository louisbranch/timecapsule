define(['layoutmanager'], function (Layout) {

  Layout.configure({
    manage: true
  });

  var App = Layout.extend({

    template: '#app-layout',

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
    }

  });

  return App;
});
