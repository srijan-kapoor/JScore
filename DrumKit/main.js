
document.addEventListener('keydown', function(e) {

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	audio.currentTime =0; //to play on successive keypress events
	audio.play();
	key.classList.add('playing')
	// to bring the buttons back to normal state
	setTimeout(function(){
		key.classList.remove('playing')
	}, 700)
})



