let first = true;

function modifyTimer(id, newValue) {
	if(document.getElementById(id).innerHTML != newValue) {
		let old = document.getElementById(id).innerHTML;
		document.getElementById(id).innerHTML = newValue;

		if(first) return;

		document.getElementById(id).parentElement.classList.add('modified');
		setTimeout(() => {
			document.getElementById(id).parentElement.classList.remove('modified');
		}, 400);
	}
}

function timer() {
	setInterval(() => {
		let element = document.getElementById('timer-milliseconds')
		element.innerHTML = ''

		var today = new Date();
		var nextChristmas = new Date(today.getFullYear(), 11, 25);
		if (today.getMonth() == 11 && today.getDate() > 25) {
			nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
		}

		let time = nextChristmas.getTime() - new Date().getTime();
		let days = Math.floor(time / (1000 * 60 * 60 * 24));
		let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((time % (1000 * 60)) / 1000);

		days = (days < 10) ? "0" + days : days;
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		
		
		// document.getElementById('timer').innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
		if(days.toString().length == 3) {
			document.getElementById('timer1').innerHTML = days.toString()[0]
			document.getElementById('timer2').innerHTML = days.toString()[1]
			document.getElementById('timer3').innerHTML = days.toString()[2]
		} else {
			document.getElementById('timer1').style.display = 'none';
			document.getElementById('timer2').innerHTML = days.toString()[0]
			document.getElementById('timer3').innerHTML = days.toString()[1]
		}

		document.getElementById('timer4').innerHTML = hours.toString()[0]
		document.getElementById('timer5').innerHTML = hours.toString()[1]

		document.getElementById('timer6').innerHTML = minutes.toString()[0]
		document.getElementById('timer7').innerHTML = minutes.toString()[1]

		document.getElementById('timer8').innerHTML = seconds.toString()[0]
		document.getElementById('timer9').innerHTML = seconds.toString()[1]
		
		seconds = Math.floor((time / 1000)),
		minutes = Math.floor((time / (1000 * 60))),
		hours = Math.floor((time / (1000 * 60 * 60)));
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		modifyTimer('timer-days', days + "d")
		modifyTimer('timer-hours', hours + "h")
		modifyTimer('timer-minutes', minutes + "m")
		modifyTimer('timer-seconds', seconds + "s")
		for(let i = 0; i < time.toString().length; i++) {
			element.innerHTML += `<span class="number" style="width:${(time.toString()[i] == '1' && i < (time.toString().length - 4)) ? 'auto' : '1ch'}">${time.toString()[i]}</span>`
		}
		element.innerHTML += `<span>ms</span>`
		first = false;

	}, 1);
}
