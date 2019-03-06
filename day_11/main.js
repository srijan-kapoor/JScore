const snipText = document.querySelector('.snippet-text');
const bookmark = document.querySelector('.bookmark');
const saved = document.querySelector('.save-folder');
let newPara = document.createElement('p');
const setting = document.querySelector('.settings');

// function setToLocalStorage(data) {
// 	localStorage.setItem('markedArray', JSON.stringify(data));
// }

// display new snippet
function addText(){
	const title = document.createElement('h2');
	const para = document.createElement('p');
	const syntax = document.createElement('span');
	
	para.classList.add('paraContent');
	syntax.classList.add('syntaxContent');

	snipText.appendChild(title);
	snipText.appendChild(para);
	snipText.appendChild(syntax);

	var num = Math.floor(Math.random()* stupidArray.length);

	document.querySelector('h2').innerHTML = stupidArray[num].head;
	document.querySelector('p').innerHTML = stupidArray[num].paraContent; 
	document.querySelector('span').innerHTML = stupidArray[num].syntaxContent;
	// setToLocalStorage(markedArray);
}

// Back button 
function addBackButton() {
	let div = document.createElement('div');
	div.classList.add('back');
	let backArrow = document.createElement('i');
	backArrow.classList.add('far');
	backArrow.classList.add('fa-arrow-alt-circle-left');
	backArrow.addEventListener('click', goBack)

	div.appendChild(backArrow);
	document.body.appendChild(div);
}

// Bookmarking a snippet
var markedArray = [];
// setToLocalStorage(markedArray);
function storedSnippet(e){
	e.target.classList.toggle('fas');
	console.log(e)
	markedArray.push(e.target.parentElement.parentElement.innerHTML);
	localStorage.setItem('markedArray', e.target.parentElement.parentElement.innerText);
	console.log(markedArray,"hello", e.target.parentElement.parentElement.innerText);
	// setToLocalStorage(markedArray);
	}

// To show the bookmarked array
function showBookmark(e) {
	console.log(e.target);
	if (e.target.className === "far fa-folder") {
		document.body.innerHTML = "";

		newPara.classList.add('saved-head');
		newPara.innerText = "Saved List";
		document.body.appendChild(newPara);

		// for (var i=0; i<markedArray.length -1; i++) {
		document.body.innerHTML += markedArray[0];
			// return markedArray;
		}
		addBackButton();
		setToLocalStorage(markedArray);
	}
// }

function goBack(){
	// newPara.innerHTML = "";
	document.body.querySelector('.snippet-text').innerHTML = "";
	console.log('it works');
	// addText();
}

function Settings() {
	// Clearing DOM elements and adding new content
	document.body.innerHTML = "";
	let title = document.createElement('h1'); 
	title.innerHTML = "Hi! You may customize your extension here."
	var btn = document.createElement('button');
	btn.classList.add('btn');
	document.body.appendChild(title);
	document.body.appendChild(btn);
	btn.innerHTML = "Submit";

	// Adding an input box
	var input = document.createElement('input');
	input.classList.add('userInput');
	document.body.appendChild(input);


	addBackButton();
	console.dir(btn);
}

// Event Listeners
setting.addEventListener('click', Settings)
saved.addEventListener('click', showBookmark)
bookmark.addEventListener('click', storedSnippet)
window.addEventListener('load', addText)




var stupidArray = JSON.parse(localStorage.getItem('stupidArray')) || [
	{	"head": "toggleClass",
		"paraContent": "Toggle a class for an element. Use element.classList.toggle() to toggle the specified class for the element.",
		"syntaxContent": "const toggleClass = (el, className) => el.classList.toggle(className)"
	},
	{	"head": "createElement",
		"paraContent": "Creates an element from a string (without appending it to the document). If the given string contains multiple elements, only the first one will be returned.Use document.createElement() to create a new element. Set its innerHTML to the string supplied as the argument. Use ParentNode.firstElementChild to return the element version of the string.",
		"syntaxContent": "const createElement = str => { const el = document.createElement('div'); el.innerHTML = str; return el.firstElementChild;}"
	},
	{	"head": "currentURL",
		"paraContent": "Returns the current URL. Use window.location.href to get current URL.",
		"syntaxContent": "const currentURL = () => window.location.href;"
	},
	{ "head": "elementContains",
		"paraContent": "Returns true if the parent element contains the child element, false otherwise. Check that parent is not the same element as child, use parent.contains(child) to check if the parent element contains the child element.",
		"syntaxContent": "const elementContains = (parent, child) => parent !== child && parent.contains(child);"
	},
	{
		"head": "getStyle",
		"paraContent": "Returns the value of a CSS rule for the specified element.Use Window.getComputedStyle() to get the value of the CSS rule for the specified element.",
		"syntaxContent": "const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];"
	},
	{
		"head": "hide",
		"paraContent": "Hides all the elements specified. Use NodeList.prototype.forEach() to apply display: none to each element specified.",
		"syntaxContent": "const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));"
	},
	{
		"head": "hasClass",
		"paraContent": "Returns true if the element has the specified class, false otherwise.Use element.classList.contains() to check if the element has the specified class.",
		"syntaxContent": "const hasClass = (el, className) => el.classList.contains(className);"
	},
	{
		"head": "insertAfter",
		"paraContent": "Inserts an HTML string after the end of the specified element. Use el.insertAdjacentHTML() with a position of 'afterend' to parse htmlString and insert it after the end of el.",
		"syntaxContent": "const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);"
	},
	{
		"head": "nodeListToArray",
		"paraContent": "Converts a NodeList to an array. Use spread operator inside new array to convert a NodeList to an array.",
		"syntaxContent": "const nodeListToArray = nodeList => [...nodeList];"
	},
	{	"head": "currentURL",
		"paraContent": "Returns the current URL.Use window.location.href to get current URL.",
		"syntaxContent": "const currentURL = () => window.location.href;"
	},
	{
		"head": "elementContains",
		"paraContent": "Returns true if the parent element contains the child element, false otherwise.Check that parent is not the same element as child, use parent.contains(child) to check if the parent element contains the child element.",
		"syntaxContent": "const elementContains = (parent, child) => parent !== child && parent.contains(child);"
	},
	{
		"head": "insertBefore",
		"paraContent": "Inserts an HTML string before the start of the specified element.Use el.insertAdjacentHTML() with a position of 'beforebegin' to parse htmlString and insert it before the start of el.",
		"syntaxContent": "const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);"
	}
]		

