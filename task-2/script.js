console.log('Hello From Script Tag');

const inputField = document.querySelector('.input-field');

const addBtn = document.querySelector('.todo-add-btn');

const todoList = document.querySelector('.todo-list-item');

addBtn.addEventListener('click', () => {
  console.log(inputField.value);

  //remove whitespaces from both sides of string
  const todoQuery = inputField.value.trim();
  if (todoQuery !== '') {
    addTodo(todoQuery);
    inputField.value = '';
  }
});

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const todoQuery = inputField.value.trim();
    if (todoQuery !== '') {
      -addTodo(todoQuery);
      inputField.value = '';
    }
  }
});

function addTodo(query) {
  console.log(query);
  const todoItem = createTodoItem();
  const checkBox = createCheckBox(todoItem);
  const todoQuery = createTodoQuery(query);
  const actions = createActions(todoItem, todoQuery);

  todoItem.appendChild(checkBox);
  todoItem.appendChild(todoQuery);
  todoItem.appendChild(actions);
  todoList.appendChild(todoItem);
}

//create TodoItem
function createTodoItem() {
  //create div for showing todo-Item
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';
  return todoItem;
}

//create checkBox

function createCheckBox(todoItem) {
  const checkBox = document.createElement('input');
  checkBox.type = 'checkBox';

  //adding eventlistener for toggle checkbox

  const completedTask = document.querySelector('.completedTask');

  checkBox.addEventListener('change', function () {
    // todoItem.classList.toggle('completed', checkBox.checked);
    // const completedTask = document.createElement('div');
    // completedTask.className = 'completedTask';

    if (checkBox.checked) {
      todoItem.classList.add('completed');
      completedTask.appendChild(todoItem);
    } else {
      todoItem.classList.remove('completed');
      todoList.appendChild(todoItem);
    }
  });
  return checkBox;
}

//create  TodoQuery

function createTodoQuery(query) {
  const todoQuery = document.createElement('span');
  todoQuery.textContent = query;
  return todoQuery;
}

//create action button for delete update check uncheck

function createActions(todoItem, todoQuery) {
  const actions = document.createElement('div');
  actions.className = 'actions';

  //edit button
  const editButton = document.createElement('button');
  editButton.textContent = '✏️';

  editButton.addEventListener('click', () => updateTodo(todoItem, todoQuery));
  actions.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', () => deleteTodo(todoItem));
  actions.appendChild(deleteButton);

  return actions;
}

function updateTodo(todoItem, todoQuery) {
  const editElem = document.createElement('input');
  editElem.className = 'edit';

  const currentInputValue = todoQuery.textContent;

  editElem.value = currentInputValue;

  todoQuery.textContent = '';
  todoQuery.appendChild(editElem);

  editElem.focus();

  editElem.addEventListener('blur', function () {
    const newQuery = editElem.value.trim();
    if (newQuery !== '') {
      todoQuery.textContent = newQuery.trim();
    } else {
      todoQuery.textContent = currentInputValue;
    }
  });

  editElem.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      editElem.blur();
    }
  });
}

function deleteTodo(todoItem) {
  todoList.removeChild(todoItem);
}
