var db = require("../db");
var _  = require("lodash");

function User (attrs) {
  _.extend(this, attrs);
}

User.prototype.save = function (callback) {
  db.insert(this, this.email, function (err, body) {
    callback(err);
  });
};

User.find = function (email, callback) {
  db.get(email, null, function (err, body) {
    callback(err, body);
  });
};

module.exports = User;
