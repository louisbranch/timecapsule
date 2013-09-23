var db = require("../db");
var _  = require("lodash");

function User (attrs) {
  _.extend(this, attrs);
}

User.prototype.save = function (callback) {
  new Error("Not Implemented!");
};
