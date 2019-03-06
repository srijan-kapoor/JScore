
// Constant Declarations
const input = document.body.querySelector('input')
const inputText = document.body.querySelector('.input');
const ul = document.body.querySelector('ul');
const plus = document.body.querySelector('.plus');
const items = document.body.querySelectorAll('.items');

// function to add items
function addItem(e){
	if (inputText.value === '') {
        return false;
      }
	else if (e.target.classList.contains('plus'))  {
		const li = document.createElement('li')
		li.classList.add('items');
		li.setAttribute("draggable", true);
		li.innerText = inputText.value;

		ul.appendChild(li);
		inputText.value='';
	}
};

// function DragStart(e) {
//   e.target.style.opacity = '0.4';  // e.target is the source node.
//   console.log('called');
// }
// items.forEach(items => item.addEventListener('dragstart', DragStart));


// Event Listeners
plus.addEventListener('click', addItem);



