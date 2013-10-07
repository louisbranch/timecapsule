var User = require("./model");
var validator = require("./validate");

function validateAttrs(attrs) {
  return validator.email(attrs.email).errors();
}

function saveUser(user, callback) {
  user.save(function (err) {
    callback(err, user);
  });
}

/*
 * Validate users attributes and save new User
 */
function factory(attrs, callback) {
  var validation = validateAttrs(attrs);
  if (validation.length) return callback(validation);
  saveUser(user, callback);
}

module.exports = factory;
