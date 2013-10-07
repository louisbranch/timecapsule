var validate = require("../../../lib/users/validate");
var assert = require("assert");

describe("users validation", function(){

  describe("email", function(){

    it("has a min length of 6", function(){
      var validation = validate.email("l@z.c");
      assert.deepEqual(validation.errors(), ["Email must have between 6 and 64 characters"]);
    });

    it("has a max length", function(){
      var longEmail = (new Array(64).join("a")) + "@gmail.com";
      var validation = validate.email(longEmail);
      assert.deepEqual(validation.errors(), ["Email must have between 6 and 64 characters"]);
    });

    it("has a valid format", function(){
      var validation = validate.email("luiz@gmail");
      assert.deepEqual(validation.errors(), ["Email format isn't valid"]);
    });

    it("has no errors when is valid", function(){
      var validation = validate.email("luiz@gmail.com");
      assert.deepEqual(validation.errors(), []);
    });

  });

});
