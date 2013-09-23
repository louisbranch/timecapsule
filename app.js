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
var home = require("./lib/home");
var dashboard = require("./lib/dashboard");
var login = require("./lib/login");
var signup = require("./lib/signup");

var auth = require("./lib/auth");
app.use(home);
app.use(dashboard);
app.use(login);
app.use(signup);

app.listen(port);
console.log("Listening on port " + port);
