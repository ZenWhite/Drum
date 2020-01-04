window.addEventListener('DOMContentLoaded', function() {
	const drumItems = document.querySelectorAll('.drum__item');

	document.addEventListener('keyup', function() {
		drumItems.forEach(item => {item.classList.remove('active')});
	});

	document.addEventListener('keydown', function(e) {
		
		drumItems.forEach(item => { 
			let h3 = item.querySelector('h3');
			if( e.code.slice(3).toLowerCase() === h3.textContent.toLowerCase() ) {
				turnOnMusic(item.dataset.sample, e.repeat);
				item.classList.add('active')
			}
		});
		
	});

	document.addEventListener('click', function(e) {
		if(e.target.matches('.drum__item')) {
			let a = false;
			e.target.classList.add('active');
			turnOnMusic(e.target.dataset.sample, a);
		}
		setTimeout(() => {
			e.target.classList.remove('active');
		}, 300);
	});

	function turnOnMusic(sample, target) {
		if(target === false) {
			const music = new Audio(sample);
		    music.play();
		}
	}
});