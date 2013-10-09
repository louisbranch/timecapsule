define(["modules/services/index"], function (services) {

  describe("Services loader", function(){

    it("defines every service to mediator", function(){
      var defined = {};
      var stub = {define: function (name, service) {
        defined[name] = service;
      }};
      services.load(stub);
      assert.deepEqual(Object.keys(defined), [
        "authentication",
        "autoLinks",
        "color",
        "dates",
        "navigator"
      ]);
    });

  });

});
