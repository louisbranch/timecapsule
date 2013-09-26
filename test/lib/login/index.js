var app = require("../../../app");
var request = require("supertest");

describe("/login", function(){

  it("responds successfully", function(done){
    request(app)
      .get("/login")
      .expect(200, done);
  });

  xit("logs in an existing user");

});
