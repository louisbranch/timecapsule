define(['jquery'], function ($) {

  function Lights(options) {
    this.mediator = options.mediator;
    this.mediator.serve('lights', this);
  }

  /* Toggle body lights switch */
  Lights.prototype.toggle = function () {
    $('body').toggleClass('lights');
  }

  return Lights;

});

