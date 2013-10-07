var BrowserID = require("passport-browserid").Strategy;
var User = require("../users/model");

function browserIDStrategy(passport) {
  passport.use(new BrowserID({
    audience: "http://localhost:8080"},
    function (email, done) {
      User.find(email, function (err, user) {
        if (!err) return done(null, user);

        if (err.error === "not_found") {
          user = new User();
          user.save(done);
        } else {
          done(err, user);
        }
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
  browserIDStrategy(passport);
  serialize(passport);
  deserialize(passport);
}

module.exports = config;
