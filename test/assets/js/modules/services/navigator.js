define([
  "backbone",
  "modules/services/navigator",
  "sinon"
], function (
  Backbone,
  Nav,
  sinon
) {

  describe("Nav Service", function(){
    var nav, mediator;

    beforeEach(function(){
      sinon.spy(Backbone.history, "navigate");
      mediator = {on: sinon.spy()};
      nav = new Nav(mediator);
    });

    afterEach(function(){
      Backbone.history.navigate.restore();
    });

    it("listens to navigate event", function(){
      assert(mediator.on.calledWith("navigate", nav.navigate, nav));
    });

    describe(".navigate", function(){

      it("triggers backbone navigate", function(){
        nav.navigate("/test");
        assert(Backbone.history.navigate.calledWith("/test", true));
      });

    });

  });

});
