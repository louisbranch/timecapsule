/* Server for development only */
var express = require('express');
var app = express();

app.configure(function () {
  app.use(express.static(__dirname));
});

// Serve index.html for every request without extension
app.get('^[^.]*$', function (req, res) {
  res.sendfile('index.html');
});

app.listen(8080);

console.log('Port 8080 gl hf');
