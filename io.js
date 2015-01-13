module.exports = function(io) {
	io.sockets.on("connection", function(socket) {
		console.log("Client connected");

		socket.on("set_nickname", function(nickname, callback) {
			console.log("Trying to set nickname " + nickname);

			var isAvailable = isNicknameAvailable(nickname);

			if (isAvailable)
				socket.nickname = nickname;

			callback(isAvailable);
		});

		socket.on("message", function(message) {
			io.sockets.emit("message", socket.nickname, message);
		});

		var isNicknameAvailable = function(nickname) {
			var clients = io.sockets.sockets;

			for (var client in clients) {
				if (clients.hasOwnProperty(client)) {
					client = clients[client];

					if (client.nickname == nickname)
						return false;
				}
			}

			return true;
		}
	});
}