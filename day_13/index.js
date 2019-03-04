const boxes= document.querySelectorAll('.main input[type="checkbox"]');
// console.log(e.target, e.currentTarget)

let recentCheckedBox;

function tick(event) {
	// declaring a flag variable
	let middleBoxes = false;
	if (event.shiftKey && event.target.checked) {
		boxes.forEach(box => {
			if (box === event.target || box === recentCheckedBox) {
				middleBoxes = !middleBoxes; //changing flag
			}
			if (middleBoxes) {
				box.checked = true; 
			}
		});
	}
	recentCheckedBox = event.target;
}

boxes.forEach(box => box.addEventListener('click', tick))
