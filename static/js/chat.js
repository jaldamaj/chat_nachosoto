$(function() {
	var socket = io.connect("/");

	socket.on("connect", function() {
		console.log("Connected with socket");

		init();
	});

	var init = function() {
		$("#nickname").keyup(function(e) {
			var code = e.which || e.keyCode;

			if (code == 13) {
				setNickname($(this).val());
			}
		});
	}

	var setNickname = function(nickname) {
		socket.emit("set_nickname", nickname, function(is_available) {
			if (is_available) {
				console.log("Nickname " + nickname + " is available");
			} else {
				console.log("Nickname " + nickname + " is not available");
			}
		});
	}
});