var app = require("../../../app");
var request = require("supertest");
var sinon = require("sinon");

describe("/home", function(){

  describe("when user is not logged in", function(){

    it("responds successfully", function(done){
      request(app)
        .get("/")
        .expect(/Enter/)
        .expect(200, done);
    });

  });

  describe("when user is logged in", function(){

    beforeEach(function(){
      sinon.stub(request.req, "isAuthenticated", function () {
        return true;
      });
    });

    afterEach(function(){
      request.isAuthenticated.restore();
    });

    xit("renders the dashboard", function(done){
      request(app)
        .get("/")
        .expect(/Dashboard/)
        .expect(200, done);
    });

  });

});
