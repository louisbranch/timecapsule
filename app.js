var express = require("express");
var path = require("path");
var passport = require("passport");
var app = module.exports = express();
var RedisStore = require('connect-redis')(express);
var port = process.env.PORT || 8080;

/*
 * App Config
 */
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
  store: new RedisStore({
    host: "localhost",
    port: process.env.REDIS_PORT || 6380,
    db: "timecapsule"
  }),
  secret: process.env.SECRET || "trolololo"
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user || {};
  next();
});

/*
 * App Modules
 */
var auth = require("./lib/auth");
var config = require("./lib/auth/config");
var home = require("./lib/home");
var letters = require("./lib/letters");

config(passport);
app.use(home);
app.use(auth);
app.use(letters);

app.listen(port);
console.log("Listening on port " + port);
