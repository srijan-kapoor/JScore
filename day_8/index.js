function newItem() {

  var item = document.getElementById("newItem").value;
  var ul = document.querySelector(".list-items");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById("newItem").value = ""; 
}

	document.addEventListener('keypress', addItem) 
	document.querySelector('.clear').addEventListener('click', removeItem)
	document.body.children[0].children[2].addEventListener('dblclick', strikeItem)


function addItem(e){
	if (e.keyCode==13) {
		newItem()
};
}
function removeItem() {
  var remove = document.body.querySelector('.list-items').removeChild(document.body.children[0].children[2].children[0]);
  return remove;
}
function strikeItem(i) {
	var strike = document.body.querySelector('.list-items').style.textDecoration = 'line-through'
    return strike;
}


