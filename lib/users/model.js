var db = require("../db");
var _  = require("lodash");

function User () {
  this.letters = [];
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

User.find_or_create = function (email, callback) {
  User.find(email, function (err, user) {
    if (!err) return callback(null, user);

    if (err.error === "not_found") {
      user = new User();
      user.save(callback);
    } else {
      callback(err, user);
    }
  });
};


module.exports = User;
