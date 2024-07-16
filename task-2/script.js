console.log('Hello From Script Tag');

const inputField = document.querySelector('.input-field');

const addBtn = document.querySelector('.todo-add-btn');

const todoList = document.querySelector('.todo-list-item');

addBtn.addEventListener('click', () => {
  console.log(inputField.value);

  //remove whitespaces from both sides of string
  const todoQuery = inputField.value.trim();
  if (!todoQuery === '') {
    addTodo(todoQuery);
    inputField.value = '';
  }
});

function addTodo(query) {
  //create div for showing todo-Item
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  //creating checkbox for toggle check uncheck
  const checkBox = document.createElement('input');
  checkBox.type = checkBox;

  //adding eventlistener for toggle checkbox
  checkBox.addEventListener('change', function () {
    todoItem.classList.toggle('completed', checkBox.checked);
  });

  const todoQuery = document.createElement('span');
  todoQuery.textContent = query;
}
