import { Task } from "../Models/Task";

const STORAGE_KEY = "tasks";

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function getTasks(): Task[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data) as Task[];
}
