const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

/* ---------- Helpers ---------- */

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateEmptyState() {
  emptyMessage.style.display = tasks.length ? "none" : "block";
}

/* ---------- Create Task ---------- */

function createTaskElement(task) {
  const li = document.createElement("li");
  if (task.completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = task.text;

  // Toggle complete
  span.addEventListener("click", () => {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  });

  /* ---------- Edit Button ---------- */
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.value = task.text;

    li.replaceChild(inputEdit, span);
    inputEdit.focus();

    function saveEdit() {
      const newValue = inputEdit.value.trim();
      if (newValue) task.text = newValue;

      saveTasks();
      renderTasks();
    }

    inputEdit.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveEdit();
      if (e.key === "Escape") renderTasks();
    });

    inputEdit.addEventListener("blur", saveEdit);
  });

  /* ---------- Delete ---------- */
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter((t) => t !== task);
    saveTasks();
    renderTasks();
  });

  li.append(span, editBtn, deleteBtn);
  return li;
}

/* ---------- Render ---------- */

function renderTasks() {
  list.innerHTML = "";

  let filtered = tasks.filter((task) => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  filtered.forEach((task) => {
    list.appendChild(createTaskElement(task));
  });

  updateEmptyState();
}

/* ---------- Add Task ---------- */

function addTask() {
  const value = input.value.trim();

  if (!value) {
    input.classList.add("error");
    return;
  }

  input.classList.remove("error");

  tasks.push({
    text: value,
    completed: false,
  });

  saveTasks();
  renderTasks();

  input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

/* ---------- Filters ---------- */

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

/* ---------- Init ---------- */

renderTasks();
