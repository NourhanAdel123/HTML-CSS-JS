import { addTodo } from "./services/TodoService.js";
import { getTasks } from "./utils/Storage.js";
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let tasksdiv = document.getElementById("tasks");
function render() {
    const tasks = getTasks(); // 🔥 always fresh data
    tasksdiv.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        tasksdiv.appendChild(li);
    });
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    addTodo(input);
    render(); // refresh from storage
});
render();
