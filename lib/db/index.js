var nano = require("nano")("http://localhost:5984");

module.exports = nano.db.use("timecapsule");
