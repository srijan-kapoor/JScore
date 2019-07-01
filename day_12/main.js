
// Constant Declarations
let allItems = JSON.parse(localStorage.getItem('itemsDragDrop')) || [];
const inputText = document.body.querySelector('.input');
const ul = document.body.querySelector('ul');
const plus = document.body.querySelector('.plus');
const listItems = document.querySelectorAll('#items, .items');
let dragSrcl = null;
var html = '';

// function to add items
function addItem(e){
	if (inputText.value === '') {
    return false;
  }
	else if (e.target.classList.contains('plus'))  {
		allItems.push(inputText.value);
		localStorage.setItem('itemsDragDrop', JSON.stringify(allItems));
		displayItems(allItems);
		inputText.value='';
	}
};

// Display items
function displayItems(array){
	ul.innerHTML = '';
	array.forEach(ele => {
		const li = document.createElement('li')
		li.classList.add('items');
		li.innerText = ele;
		if(!li.innerText) return;
		li.setAttribute("draggable", true);
		ul.appendChild(li);
	})
	JSON.parse(localStorage.getItem('itemsDragDrop'));
}

// Drag events
function handleDragStart(e) {
  e.target.style.opacity = '0.4';  // e.target is the source node.
  dragSrcl = e.target;
  // The dataTransfer object exposes properties to provide visual feedback to the user during the drag process. 
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

// To show that drag event has started
function handleDragEnter(e) {
	e.target.classList.add('over');
}

function handleDragLeave(e) {
	e.stopPropagation()
	e.target.classList.remove('over');
}

function handleDrop(e){
	if(dragSrcl != e.target) {
		dragSrcl.innerHTML = e.target.innerHTML;
		e.target.innerHTML = e.dataTransfer.getData('text/html');
		e.target.style.opacity = "1";
		e.target.classList.remove('over');
	}
	return false;
}

function handleDragEnd(e){
	console.log('called end')
	let col = document.querySelectorAll('.draggable')
	col.forEach.call(col, function(ele){
		ele.classList.remove('over');
	})
	e.target.style.opacity = "1";
}

displayItems(allItems)
// Event Listeners
plus.addEventListener('click', addItem);

[].forEach.call(listItems, function(listItem){ // Similar to Array.prototype.forEach.call(...)
	listItem.addEventListener('dragstart', handleDragStart, false)
	listItem.addEventListener('dragenter', handleDragEnter, false)
	listItem.addEventListener('dragover', handleDragOver, false)
	listItem.addEventListener('dragleave', handleDragLeave, false)
	listItem.addEventListener('drop', handleDrop, false)
	listItem.addEventListener('dragend', handleDragEnd, false)
})




