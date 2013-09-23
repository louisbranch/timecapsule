var express = require("express");
var factory = require("../users/factory");
var app = module.exports = express();

app.set("views", __dirname);

app.get("/signup", function (req, res) {
  res.render("view.jade");
});

app.post("/signup", function (req, res) {
  var attrs = {
    email: req.body.email,
    password: req.body.password,
    confirmation: req.body.confirmation
  };
  factory(attrs, function (err, user) {
    if (err) return res.render("view.jade", {errors: err});
    req.login(user, function (err) {
      if (err) return res.render("view.jade", {errors: err});
      res.redirect(302, "/");
    });
  });
});
