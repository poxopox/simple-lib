
const input = document.getElementById('newTodo');
const saveButton = document.getElementById('saveButton');
const todo = [];

function createTodoItem (todoItem) {
    const todoList = document.getElementById('todoList');
    const todoItemElement = document.createElement('li');
    todoItemElement.innerText = todoItem;
    console.dir(todoList);
    todoList.append(todoItemElement);
} 


saveButton.addEventListener('click', () => {
   todo.push(input.value);
   createTodoItem(input.value);
});






