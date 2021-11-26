function createSnow() {
	let maxWith = document.querySelector('.content').offsetWidth
	let maxLeft = Math.random() * maxWith;

	const snow_flake = document.createElement('span');
	snow_flake.classList.add('icon-point');
	snow_flake.style.left = maxLeft + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 5 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 1 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 7000)
}

setInterval(createSnow, 40);