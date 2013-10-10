var BrowserID = require("passport-browserid").Strategy;
var User = require("../users/model");

function browserIDStrategy(passport) {
  passport.use(new BrowserID({
    audience: "http://localhost:8080"},
    function (email, done) {
      User.find_or_create(email, done);
    }
  ));
}

function serialize(passport) {
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });
}

function deserialize(passport) {
  passport.deserializeUser(function (email, done) {
    User.find(email, function (err, user) {
      if (err) return callback(err, null);
      if (!user) return callback("user not found", null)
      done(null, user);
    });
  });
}

function config(passport) {
  browserIDStrategy(passport);
  serialize(passport);
  deserialize(passport);
}

module.exports = config;
