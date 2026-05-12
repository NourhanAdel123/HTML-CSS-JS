const STORAGE_KEY = "tasks";
export function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
export function getTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        return [];
    }
    return JSON.parse(data);
}
