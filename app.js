var express = require("express");
var path = require("path");
var app = module.exports = express();
var port = process.env.PORT || 8080;

/*
 * App Config
 */
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({secret: process.env.SECRET || "trolololo"}));

/*
 * App Modules
 */
var home = require("./lib/home");
var dashboard = require("./lib/dashboard");

app.use(home);
app.use(dashboard);

app.listen(port);
console.log("Listening on port " + port);
