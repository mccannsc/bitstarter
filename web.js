var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html');

var buffer = new Buffer(index);

app.get('/', function(request, response) {
response.send("Got here!"); 
 response.send(buffer.toString("utf-8", 0, 20));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
