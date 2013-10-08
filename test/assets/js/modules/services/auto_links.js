define(["jquery", "sinon", "modules/services/auto_links"], function ($, sinon, AutoLinks) {

  describe("Auto Links service", function(){
    var links, stub;

    beforeEach(function(){
      stub = {trigger: sinon.spy()};
      links = new AutoLinks({mediator: stub});
      links.enable();
      $("#fixture")
        .append("<a href='/test' id='test-link'>Link</a>")
        .append("<a href='http://localhost:9001/test' id='absolute-link'>Link</a>")
        .append("<a href='/test' id='bypass-link' data-bypass>Link</a>");
    });

    afterEach(function(){
      $("#fixture").html();
    });

    it("hijacks the click and triggers the navigate", function(){
      $("#test-link").click();
      assert(stub.trigger.calledWith("navigate", "/test"));
    });

    it("uses relative part of an absolute url", function(){
      $("#absolute-link").click();
      assert(stub.trigger.calledWith("navigate", "/test"));
    });

    it("bypass links with data-bypass", function(){
      $("#bypass-link").click();
      assert(!stub.trigger.called);
    });

  });

});
