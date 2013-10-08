define(["modules/services/dates_service"], function (Data) {

  var date = new Date(2014, 06, 25, 0, 0, 0);

  describe("Dates service", function(){

    it("formats date to display on view", function(){
      var r = new Data(date).format();
      assert.deepEqual(r, {
        day: 25,
        month: "Jun",
        year: 2014
      });
    });

  });

});
