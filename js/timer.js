window.onload = function () {
	setInterval(() => {
		let time = new Date("December 25, 2020 00:00:00").getTime() - new Date().getTime();
		let days = Math.floor(time / (1000 * 60 * 60 * 24));
		let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((time % (1000 * 60)) / 1000);
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		document.getElementById('timer').innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
		seconds = Math.floor((time / 1000)),
		minutes = Math.floor((time / (1000 * 60))),
		hours = Math.floor((time / (1000 * 60 * 60)));
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		document.getElementById('timer-hours').innerHTML = hours + "h";
		document.getElementById('timer-minutes').innerHTML = minutes + "m";
		document.getElementById('timer-seconds').innerHTML = seconds + "s";
		document.getElementById('timer-milliseconds').innerHTML = time + "ms";

	}, 1);
};