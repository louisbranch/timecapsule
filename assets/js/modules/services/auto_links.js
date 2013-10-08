define(["jquery"], function ($) {

  function AutoLinks (options) {
    this.mediator = options.mediator;
  }

  /*
   * Hijack all clicks on links if they are on the same host
   * and foward the path clicked to Backbone.history
   * Skip this by adding data-bypass attribute to the link
   */
  AutoLinks.prototype.enable = function () {
    var mediator = this.mediator;
    $(document).on("click", "a:not([data-bypass])", function(evt) {
      var $this = $(this);
      var href = $this.prop("href");
      var root = location.protocol + "//" + location.host + "/";
      if (href && href.slice(0, root.length) === root) {
        evt.preventDefault();
        var path = $this[0].pathname;
        mediator.trigger("navigate", path);
      }
    });
  };

  return AutoLinks;

});
