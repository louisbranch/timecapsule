var express = require("express");
var path = require("path");
var passport = require("passport");
var app = module.exports = express();
var port = process.env.PORT || 8080;

/*
 * App Config
 */
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({secret: process.env.SECRET || "trolololo"}));
app.use(passport.initialize());
app.use(passport.session());

/*
 * App Modules
 */
var auth = require("./lib/auth");
var config = require("./lib/auth/config");
var home = require("./lib/home");
var dashboard = require("./lib/dashboard");
var letters = require("./lib/letters");

config(passport);
app.use(home);
app.use(auth);
app.use(dashboard);
app.use(letters);

app.listen(port);
console.log("Listening on port " + port);
