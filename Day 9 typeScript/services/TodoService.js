import { saveTasks } from "../utils/Storage";
import { getTasks } from "../utils/Storage";
export let tasks = [
    {
        title: "task1",
    },
];
export function addTodo(input) {
    if (!input)
        return;
    const tasks = getTasks(); // read latest
    const newTask = {
        title: input.value,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    input.value = "";
}
