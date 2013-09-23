var express = require("express");
var passport = require("passport");
var app = module.exports = express();

app.set("views", __dirname);

app.get("/login", function (req, res) {
  res.render("view.jade");
});

app.post("/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);
