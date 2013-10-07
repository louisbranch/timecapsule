var factory = require("../../../lib/users/factory");
var User = require("../../../lib/users/model");
var assert = require("assert");
var sinon = require("sinon");

describe("User factory", function(){

  describe("when user is invalid", function(){
    var attrs;

    beforeEach(function(){
      attrs = { email: "luiz@gmail" };
    });

    it("validates user attributes", function(done){
      factory(attrs, function (err) {
        assert.deepEqual(err, ["Email format isn't valid"]);
        done();
      });
    });

    it("doesn't return an user", function(done){
      factory(attrs, function (err, user) {
        assert.equal(user, undefined);
        done();
      });
    });

  });

  describe("when user attributes are valid", function(){
    var attrs;

    beforeEach(function(){
      attrs = { email: "luiz@gmail.com" };
      sinon.spy(User.prototype, "save");
    });

    afterEach(function(){
      User.prototype.save.restore();
    });

    it("returns a new user", function(done){
      factory(attrs, function (err, user) {
        assert(user);
        done();
      });
    });

    it("saves the user", function(done){
      factory(attrs, function () {
        assert(User.prototype.save.calledOnce);
        done();
      });
    });

  });

});
