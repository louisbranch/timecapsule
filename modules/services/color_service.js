define(function () {

  /*
   * Creates a random HSV (hue, saturation,
   * value) color
   */
  function hsv(argument) {
    var h = rand(1, 360);
    var s = rand(50, 100);
    var l = rand(0, 50);
    return h + ',' + s + '%,' + l + '%';
  }

  function rand(min, max) {
    return parseInt(Math.random() * (max-min+1), 10) + min;
  }

  return {
    hsv: hsv
  };

});
