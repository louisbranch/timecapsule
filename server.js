/* Server for development only */
var express = require("express"),
    path = require("path"),
    app = express();

app.use(express.static(path.join(__dirname + "/public")));

app.post("/letters/:id", function (req, res) {
  var payload = "";

  req.on("data", function (data) {
    payload += data;
    console.log(payload);
  });

  req.on("end", function (data) {
    res.end();
  });
});

app.listen(8080);

console.log("Port 8080 gl hf");
