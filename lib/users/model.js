var db = require("../db");
var _  = require("lodash");

function User (attrs) {
  _.extend(this, {letters: []}, attrs || {});
}

User.prototype.save = function (callback) {
  db.insert(this, this._id, function (err, body) {
    callback(err);
  });
};

User.find = function (email, callback) {
  db.view("timecapsule", "emails", {keys: [email]}, function (err, body) {
    if (err) callback(err);
    if (body.rows.length) return callback(null, body.rows[0].value);
    callback();
  });
};

User.find_or_create = function (email, callback) {
  User.find(email, function (err, user) {
    if (err) return callback(err, null);
    if (user) {
      callback(err, user);
    } else {
      user = new User({email: email});
      user.save(callback);
    }
  });
};


module.exports = User;
