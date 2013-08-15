define(['services/color_service'], function (color) {

  describe('Color service', function(){

    it('generates a random hsv color', function(){
      var r = color.hsv();
      assert(r.match(/\d{1,3},\d{2,3}%,\d{1,2}%/));
    });

  });

});

