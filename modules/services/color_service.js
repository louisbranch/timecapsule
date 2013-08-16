define(function () {

  /*
   * Creates a random HSV (hue, saturation,
   * value) color and convert to RGB
   */
  function random() {
    var h = Math.random();
    var s = 0.5;
    var v = 0.45;
    return hsvToRgb(h, s, v);
  }

  /* Convert hsv color to rgb */
  function hsvToRgb(h, s, v) {
    var hI = Math.floor(h * 6);
    var f = h * 6 - hI;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var r, g, b;

    switch (hI) {
      case 0:
        r = v; g = t; b = p;
        break;
      case 1:
        r = q; g = v; b = p;
        break;
      case 2:
        r = p; g = v; b = t;
        break;
      case 3:
        r = p; g = q; b = v;
        break;
      case 4:
        r = t; g = p; b = v;
        break;
      case 5:
        r = v; g = p; b = q;
        break;
    }

    r = Math.round(r * 256);
    g = Math.round(g * 256);
    b = Math.round(b * 256);

    return {r: r, g: g, b: b};
  }

  return {
    random: random
  };

});
