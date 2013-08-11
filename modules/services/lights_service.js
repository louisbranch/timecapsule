define(['jquery'], function ($) {

  function toggle() {
    $('body').toggleClass('lights');
  }

  /* Toggle body lights switch */
  function Lights(options) {
    this.mediator = options.mediator;

    this.mediator.serve('lights', {
      toggle: toggle
    });

  }

  return Lights;

});

