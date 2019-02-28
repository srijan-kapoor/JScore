const snipText = document.querySelector('.snippet-text');

// display new snippet
function addText(text){
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

}

window.addEventListener('load', addText)

var stupidArray = [
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
]

