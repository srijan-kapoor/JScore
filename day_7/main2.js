var mouse_move = function(e) {
  document.querySelectorAll('p').forEach((p,i) => {
	if(i === 0) {p.innerHTML = e.screenX}
	if(i === 1) {p.innerHTML = e.screenY}
	if(i === 2) {p.innerHTML = e.clientX}
	if(i === 3) {p.innerHTML = e.clientY}
})
}

document.querySelector('.capture-event').addEventListener('mousemove', mouse_move)
