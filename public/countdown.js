var countDownDate = new Date("Jun 5, 2027 08:00:00").getTime();

var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate - now;

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "school's out :D";
		return;
	}

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	document.getElementById("countdown").innerHTML = days + "d until end of school";
}, 1000);