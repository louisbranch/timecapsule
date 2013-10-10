var _ = require("lodash");
var User = require("../users/model");

function Letter(content, user) {
  this.content = content;
  this.user = new User(user);
}

Letter.prototype.save = function (callback) {
  this._create_or_update();
  this.user.save(callback);
};

Letter.prototype._create_or_update = function () {
  var index = _.findIndex(this.user.letters, function (letter) {
    return letter.id === this.content.id;
  }, this);

  if (index >= 0) {
    this.user.letters[index] = this.content;
  } else {
    this.user.letters.push(this.content);
  }
};

module.exports = Letter;
