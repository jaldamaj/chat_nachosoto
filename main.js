var express = require("express");

var app = express();

var PORT = 8080;

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});

app.set("view options", {
	layout: false
});

app.get("/", function(request, response) {
	response.render("main.jade");
});