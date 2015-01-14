var http = require("http");
var express = require("express");
var io = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = io.listen(server);

var PORT = process.env.PORT || 8080;

server.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});

app.set("view options", {
	layout: false
});

app.use(express.static(__dirname + "/static"));

app.get("/", function(request, response) {
	response.render("main.jade");
});

require("./io")(io);