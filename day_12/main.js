
// Constant Declarations
const input = document.body.querySelector('input')
const inputText = document.body.querySelector('.input');
const ul = document.body.querySelector('ul');
const plus = document.body.querySelector('.plus');

// function to add items
function addItem(e){
	if (inputText.value === '') {
        return false;
      }
	else if (e.target.classList.contains('plus')) {
		const li = document.createElement('li')
		li.classList.add('items');
		li.innerText = inputText.value;

		ul.appendChild(li);
		inputText.value='';
	}
};

// Event Listeners
plus.addEventListener('click', addItem)



