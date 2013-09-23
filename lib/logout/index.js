var express = require("express");
var app = module.exports = express();
var auth = require("../auth/middleware");

app.get("/logout", auth.isAuthenticated, function (req, res) {
  req.logout();
  res.redirect(302, "/");
});
