var factory = require("../../../lib/users/factory");
var lockpicker = require("lockpicker");
var User = require("../../../lib/users/model");
var assert = require("assert");
var sinon = require("sinon");

describe("User factory", function(){

  beforeEach(function(){
    sinon.stub(lockpicker, "hashPassword", function (password, callback) {
      callback(null, {hash: "AAA", salt: "BBB"});
    });
  });

  afterEach(function(){
    lockpicker.hashPassword.restore();
  });

  describe("when user is invalid", function(){
    var attrs;

    beforeEach(function(){
      attrs = {
        email: "luiz@gmail",
        password: "secret",
        confirmation: null
      };
    });

    it("validates user attributes", function(done){
      factory(attrs, function (err) {
        assert.deepEqual(err, [
          "Password and confirmation don't match",
          "Email format isn't valid"
        ]);
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
      attrs = {
        email: "luiz@gmail.com",
        password: "secret",
        confirmation: "secret"
      };
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

    it("creates a password hash", function(done){
      factory(attrs, function (err, user) {
        assert(user.hash);
        done();
      });
    });

    it("creates a password salt", function(done){
      factory(attrs, function (err, user) {
        assert(user.salt);
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
