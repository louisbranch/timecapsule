define(['jquery'], function ($) {

  function AutoLinks(options) {
    this.mediator = options.mediator;
    this.mediator.serve('autoLinks', this);
  }

  /*
   * Hijack all clicks on links if they are on the same host
   * and foward the path clicked to Backbone.history
   * Skip this by adding data-bypass attribute to the link
   */
  AutoLinks.prototype.enable = function () {
    var service = this;
    $(document).on('click', 'a:not([data-bypass])', function(evt) {
      var href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
      var root = location.protocol + '//' + location.host + '/';
      if (href.prop && href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        service.mediator.navigate(href.attr);
      }
    });
  };

  return AutoLinks;

});
