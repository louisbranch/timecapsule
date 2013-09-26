var app = require("../../../app");
var request = require("supertest");

describe("/signup", function(){

  it("responds successfully", function(done){
    request(app)
      .get("/signup")
      .expect(200, done);
  });

});
