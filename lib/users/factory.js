var lockpicker = require("lockpicker");
var User = require("./model");
var validator = require("./validate");

function hashPassword(attrs, callback) {
  lockpicker.hashPassword(attrs.password, function (err, password) {
    if (err) return callback(err);

    attrs.hash = password.hash;
    attrs.salt = password.salt;
    delete attrs.password;
    delete attrs.confirmation;

    callback(null, attrs);
  });
}

function validateAttrs(attrs) {
  var password = validator.password(attrs.password, attrs.confirmation);
  var email = validator.email(attrs.email);
  return password.errors().concat(email.errors());
}

function saveUser(user, callback) {
  user.save(function (err) {
    callback(err, user);
  });
}

/*
 * Validate users attributes
 * create password hash
 * save new User
 */
function factory(attrs, callback) {
  var validation = validateAttrs(attrs);
  if (validation.length) return callback(validation);

  hashPassword(attrs, function (err, attrs) {
    if (err) return callback(err);
    var user = new User(attrs);
    saveUser(user, callback);
  });
}

module.exports = factory;
