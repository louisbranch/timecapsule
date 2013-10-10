var express = require("express");
var app = module.exports = express();
var auth = require("../auth/middleware");
var Letter = require("./model");

app.set("views", __dirname);

app.get("/letters", auth.isAuthenticated, function (req, res) {
  res.format({
    "text/html": function () {
      res.render("view.jade");
    },
    "application/json": function () {
      res.json(req.user.letters);
    }
  });
});

app.put("/letters/:id", auth.isAuthenticated, function (req, res) {
  var letter = new Letter(req.body, req.user);
  letter.save(function (err) {
    if (err) return res.status(401).end()
    res.status(200).end();
  });
});
