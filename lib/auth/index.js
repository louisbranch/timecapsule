var LocalStrategy = require("passport-local").Strategy;
var lockpicker = require("lockpicker");
var User = require("../users/model");

function localStrategy(passport) {
  passport.use(new LocalStrategy({
    usernameField: "email"},
    function (email, password, done) {
      User.find(email, function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);
        lockpicker.validatePassword(password, user.hash, user.salt, function (err) {
          if (err) return done(null, false);
          done(null, user);
        });
      });
    }
  ));
}

function serialize(passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.email);
  });
}

function deserialize(passport) {
  passport.deserializeUser(function (email, done) {
    User.find(email, function (err, user) {
      done(err, user);
    });
  });
}

function config(passport) {
  localStrategy(passport);
  serialize(passport);
  deserialize(passport);
}

module.exports = {
  config: config
};
