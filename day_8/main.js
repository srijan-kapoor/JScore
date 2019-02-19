const button = document.querySelector('button');
const todoText = document.querySelector('.todo-text');
const ul = document.querySelector('ul');
const todo = document.querySelector('.display-todo');
const completed = document.querySelector('.complete');
const active = document.querySelector('.active');
const all = document.querySelector('.all');
const left = document.querySelector('.items-left');
console.log(left)

const allTodo = [
  {
    name: 'One',
    done: false,
  },
  {
    name: 'Two',
    done: false,
  },
];
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
  displayTodo(allTodo);
}

// To change state of an item in the array
function toggleTodo(event) {
  if (event.target.localName === 'input') {
    const index = event.target.dataset.index;
    allTodo[index].done = !allTodo[index].done;
    var strike = document.body.querySelectorAll('.display-todo');
    strike.forEach(todo => {
      console.log(todo);
      if (todo.done) {
        todo.style.textDecoration = 'line-through';
      }
    }
    )
    return strike;
    // console.log(allTodo);
  }
  displayTodo(allTodo);
}
displayTodo(allTodo);

// To remove an item from the list of array
  function removeTodo(e) {
    if(e.target.classList.contains('delete')){
    let id = e.target.dataset.index;
    // console.log(id, 'removeTodo');
    allTodo.splice(id, 1);
    displayTodo(allTodo);
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
    console.log(e.keyCode)
   if (e.keyCode==13)  {
      addTodo(todoText.value)
   }
  }

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



