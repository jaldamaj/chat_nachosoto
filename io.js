module.exports = function(io) {
	io.sockets.on("connection", function(socket) {
		console.log("Client connected");

		socket.on("set_nickname", function(nickname, callback) {
			console.log("Trying to set nickname " + nickname);

			socket.nickname = nickname;

			callback(true);
		});

		socket.on("message", function(message) {
			io.sockets.emit("message", socket.nickname, message);
		});
	});
}