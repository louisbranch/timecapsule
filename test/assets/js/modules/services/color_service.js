define(['services/color_service'], function (service) {

  describe('Color service', function(){

    it('generates a random rgb color from same saturation and value', function(){
      var color = service.random();
      assert(color.r >= 0 && color.r < 256);
      assert(color.g >= 0 && color.g < 256);
      assert(color.b >= 0 && color.b < 256);
    });

  });

});

