const inputName = document.querySelector("#input-Name");
const name = inputName.querySelector(".name-value");
const h3 = document.querySelector(".userName");
const inputTodo = document.querySelector("#input-ToDo");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";

function showName() {
  inputName.classList.add(HIDDEN_CLASSNAME);
  h3.classList.remove(HIDDEN_CLASSNAME);
  inputTodo.classList.remove(HIDDEN_CLASSNAME);
  h3.innerText = localStorage.getItem(USER_NAME_KEY);
}

function saveName(event) {
  event.preventDefault();
  localStorage.setItem("username", name.value);
  showName();
}

inputName.addEventListener("submit", saveName);

if (localStorage.getItem(USER_NAME_KEY)) {
  showName();
}
