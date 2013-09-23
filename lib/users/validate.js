var Validator = require("validator").Validator;

Validator.prototype.error = function (msg) {
  this._errors.push(msg);
  return this;
};

Validator.prototype.errors = function () {
  return this._errors;
};

function emailValidator(email) {
  var validator = new Validator();
  validator.check(email, {
    len: "Email must have between 6 and 64 characters",
    isEmail: "Email format isn't valid"
  }).len(6, 64).isEmail();
  return validator;
}

function passwordsValidator(password, confirmation) {
  var validator = new Validator();
  validator.check(password, {
    len: "Password must have between 6 and 64 characters",
    equals: "Password and confirmation don't match"
  }).equals(confirmation).len(6, 64);
  return validator;
}

module.exports = {
  email: emailValidator,
  password: passwordsValidator
};
