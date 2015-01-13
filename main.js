var http = require("http");
var express = require("express");
var io = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = io.listen(server);

var PORT = 8080;

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

io.sockets.on("connection", function(socket) {
	console.log("Client connected");

	socket.on("set_nickname", function(nickname, callback) {
		console.log("Trying to set nickname " + nickname);

		callback(true);
	});
});