$(function() {
	$("#nickname").keyup(function(e) {
		var code = e.which || e.keyCode;

		if (code == 13) {
			setNickname($(this).val());
		}
	});
});