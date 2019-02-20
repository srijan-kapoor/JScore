const button = document.querySelector('button');
const todoText = document.querySelector('.todo-text');
const ul = document.querySelector('ul');
const todo = document.querySelector('.display-todo');
const completed = document.querySelector('.complete');
const active = document.querySelector('.active');
const all = document.querySelector('.all');
const left = document.querySelector('.items-left');
const arrow = document.querySelector('.fas');
// const li = document.getElementsbyTagName('li');

const allTodo = JSON.parse(localStorage.getItem('srijan-todo')) || [];


function displayTodo(array) {
  ul.innerHTML = '';
  array.forEach((todo, i) => {
    // Inserting checkbox
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.done;
    input.classList.add('check-mark')
    const span = document.createElement('span');
    // Inserting delete 
    const cross = document.createElement('span');
    cross.innerText = "";
    cross.classList.add("delete");
    cross.setAttribute('data-index', i);

    span.innerText = todo.name;
    const li = document.createElement('li');
    input.setAttribute('data-index', i);
    li.setAttribute('data-index', i);
    li.classList.add('display-todo');
    span.classList.add('span-text');
    const div = document.createElement('div')
    div.appendChild(input);
    div.appendChild(span);
    li.appendChild(div);
    li.appendChild(cross);
    ul.appendChild(li);
  });
  itemsLeft();
}
function setToLocalStorage(data){
  localStorage.setItem('srijan-todo', JSON.stringify(data));
}
// Adding a new item to the list
function addTodo(todoName) {
  const singleTodo = {
    name: todoName,
    done: false,
  };
  if (todoName) {
    allTodo.push(singleTodo);
  }
  todoText.value = '';
  setToLocalStorage(allTodo);
  displayTodo(allTodo);
}

// To change state of an item in the array
function toggleTodo(event) {
  if (event.target.localName === 'input') {
    const index = event.target.dataset.index;
    allTodo[index].done = !allTodo[index].done;
    // strike();
    displayTodo(allTodo);
    setToLocalStorage(allTodo);
  } 
}
displayTodo(allTodo);

// To remove an item from the list of array
  function removeTodo(e) {
    if(e.target.classList.contains('delete')){
    let id = e.target.dataset.index;
    // console.log(id, 'removeTodo');
    allTodo.splice(id, 1);
    displayTodo(allTodo);
    setToLocalStorage(allTodo);
    }
  }
  function completeTodo(e) {
    var completed = allTodo.filter((v) => v.done === true);
    displayTodo(completed)
  }
  function activeTodo(e) {
    var active = allTodo.filter((v) => v.done === false);
    displayTodo(active)
  }
  function allTodoo(e) {
    displayTodo(allTodo);
  }
  function enter(e) {
    // console.log(e.keyCode)
   if (e.keyCode==13)  {
      addTodo(todoText.value)
   }
  }
  function collapse() {
    if(ul.classList.contains('none'))
    {
      ul.classList.remove('none');
    }
    else {
      ul.classList.add('none');
    }
  }
  // function strike(i) {
  //   var strike = document.querySelector('.display-todo').style.textDecoration ='line-through'
  //   return strike;
  // }
// To check the number of items left
  function itemsLeft() {
    let countChecked = allTodo.filter(v => v.done == false);
    console.log('called', countChecked)
    left.textContent = countChecked.length + " Items Left";
  }

document.body.addEventListener('keyup', enter);
// button.addEventListener('click', () => addTodo(todoText.value));
ul.addEventListener('click', toggleTodo);
ul.addEventListener('click', removeTodo)
completed.addEventListener('click', completeTodo)
active.addEventListener('click', activeTodo)
all.addEventListener('click', allTodoo)
arrow.addEventListener('click',collapse)
// li.addEventListener('click', strike)
// ul.addEventListener('click,', strike)



