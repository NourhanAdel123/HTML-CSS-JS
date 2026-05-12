import { addTodo } from "./services/TodoService.js";
import { getTasks } from "./utils/Storage.js";

let btn = document.getElementById("btn") as HTMLButtonElement | null;
let input = document.getElementById("input") as HTMLInputElement | null;
let tasksdiv = document.getElementById("tasks") as HTMLElement;

function render() {
  const tasks = getTasks(); // 🔥 always fresh data

  tasksdiv.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    tasksdiv.appendChild(li);
  });
}

btn?.addEventListener("click", () => {
  addTodo(input);
  render(); // refresh from storage
});

render();
