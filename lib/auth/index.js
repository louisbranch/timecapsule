var express = require("express");
var app = module.exports = express();
var passport = require("passport");

app.post("/auth/login",
    passport.authenticate("browserid", {failureRedirect: "/"}),
    function (req, res) {
      res.redirect("/letters");
    }
);

app.post("/auth/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

