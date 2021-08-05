const todoForm = document.querySelector("#input-ToDo");
const todoInput = todoForm.querySelector(".todo-value");
const todoList = document.querySelector(".todo-List");

const TODOS_KEY = "toDos";

toDos = [];

function savedTodos(item) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "완료";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  savedTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const curList = localStorage.getItem(TODOS_KEY);
if (curList) {
  const parsedToDos = JSON.parse(curList);
  parsedToDos.forEach(paintTodo);
}
