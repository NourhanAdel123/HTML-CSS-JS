import { Task } from "./../Models/Task";
import { saveTasks } from "../utils/Storage";
import { getTasks } from "../utils/Storage";

export let tasks: Task[] = [
  {
    title: "task1",
  },
];

export function addTodo(input: HTMLInputElement | null) {
  if (!input) return;

  const tasks = getTasks(); // read latest

  const newTask: Task = {
    title: input.value,
  };

  tasks.push(newTask);

  saveTasks(tasks);

  input.value = "";
}
