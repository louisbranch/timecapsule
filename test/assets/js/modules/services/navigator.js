define([
  "backbone",
  "modules/services/navigator",
  "sinon"
], function (
  Backbone,
  Navigator,
  sinon
) {

  describe("Navigator Service", function(){
    var navigator, mediator;

    before(function(){
      sinon.spy(Backbone.history, "navigate");
      mediator = {on: sinon.spy()};
      navigator = new Navigator(mediator);
    });

    after(function(){
      Backbone.history.navigate.restore();
    });

    it("listens to navigate event", function(){
      assert(mediator.on.calledWith("navigate", navigator.navigate, navigator));
    });

    describe(".navigate", function(){

      it("triggers backbone navigate", function(){
        navigator.navigate("/test");
        assert(Backbone.history.navigate.calledWith("/test", true));
      });

    });

  });

});
