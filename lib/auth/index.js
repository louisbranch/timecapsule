var express = require("express");
var app = module.exports = express();
var passport = require("passport");

app.post("/auth/browserid",
    passport.authenticate("browserid", {failureRedirect: "/"}),
    function (req, res) {
      res.redirect("/");
    }
);

