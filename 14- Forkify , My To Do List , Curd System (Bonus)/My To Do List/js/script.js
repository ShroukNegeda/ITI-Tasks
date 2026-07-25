const STORAGE_KEY = `todo_tasks`;

let currentFilter = `all`;
let editingTaskId = null;

const taskForm         = document.querySelector(`#taskForm`);
const taskIdField      = document.querySelector(`#taskId`);
const taskInput        = document.querySelector(`#taskInput`);
const submitBtn        = document.querySelector(`#submitBtn`);
const cancelEditBtn    = document.querySelector(`#cancelEditBtn`);
const filtersBar       = document.querySelector(`#filters`);
const clearCompletedBtn = document.querySelector(`#clearCompletedBtn`);
const taskList         = document.querySelector(`#taskList`);
const emptyState       = document.querySelector(`#emptyState`);
const progressText     = document.querySelector(`#progressText`);
const progressFill     = document.querySelector(`#progressFill`);

function getTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(text) {
  const tasks = getTasks();
  tasks.unshift({
    id: Date.now(),
    text: text,
    completed: false
  });
  saveTasks(tasks);
  render();
}

function updateTaskText(id, newText) {
  const tasks = getTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.text = newText;
  saveTasks(tasks);
  render();
}

function toggleTaskCompleted(id) {
  const tasks = getTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks(tasks);
  render();
}

function deleteTask(id) {
  const tasks = getTasks().filter((t) => t.id !== id);
  saveTasks(tasks);
  render();
}

function clearCompletedTasks() {
  const tasks = getTasks().filter((t) => !t.completed);
  saveTasks(tasks);
  render();
}

function getFilteredTasks() {
  const tasks = getTasks();
  if (currentFilter === `active`) return tasks.filter((t) => !t.completed);
  if (currentFilter === `completed`) return tasks.filter((t) => t.completed);
  return tasks;
}

function resetForm() {
  taskForm.reset();
  taskIdField.value = ``;
  submitBtn.textContent = `Add`;
  cancelEditBtn.classList.add(`d-none`);
}

function render() {
  renderProgress();
  renderFilters();
  renderTaskList();
}

function renderProgress() {
  const tasks = getTasks();
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  progressText.textContent = total === 0
    ? `No tasks yet`
    : `${done} of ${total} done`;

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  progressFill.style.width = `${percent}%`;
}

function renderFilters() {
  const buttons = filtersBar.querySelectorAll(`.filter-btn`);
  buttons.forEach((btn) => {
    btn.classList.toggle(`is-active`, btn.dataset.filter === currentFilter);
  });
}

function renderTaskList() {
  const tasks = getFilteredTasks();

  if (tasks.length === 0) {
    taskList.innerHTML = ``;
    emptyState.classList.remove(`d-none`);
    return;
  }

  emptyState.classList.add(`d-none`);

  let itemsHtml = ``;
  for (const task of tasks) {
    itemsHtml += buildTaskItemHtml(task);
  }
  taskList.innerHTML = itemsHtml;
}

function buildTaskItemHtml(task) {
  const completedClass = task.completed ? `is-completed` : ``;
  const checkIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  if (editingTaskId === task.id) {
    return `
      <li class="task-item ${completedClass}" data-id="${task.id}">
        <button class="task-checkbox" data-action="toggle" data-id="${task.id}">${checkIcon}</button>
        <input type="text" class="task-text-input" data-id="${task.id}" value="${escapeHtml(task.text)}">
        <div class="task-actions">
          <button class="icon-btn save" data-action="save" data-id="${task.id}" aria-label="Save task">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
          <button class="icon-btn delete" data-action="cancel-edit" data-id="${task.id}" aria-label="Cancel edit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </li>
    `;
  }

  return `
    <li class="task-item ${completedClass}" data-id="${task.id}">
      <button class="task-checkbox" data-action="toggle" data-id="${task.id}">${checkIcon}</button>
      <span class="task-text" data-action="toggle" data-id="${task.id}">${escapeHtml(task.text)}</span>
      <div class="task-actions">
        <button class="icon-btn edit" data-action="edit" data-id="${task.id}" aria-label="Edit task">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
        </button>
        <button class="icon-btn delete" data-action="delete" data-id="${task.id}" aria-label="Delete task">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>
        </button>
      </div>
    </li>
  `;
}

function escapeHtml(str) {
  const div = document.createElement(`div`);
  div.textContent = str;
  return div.innerHTML;
}

taskForm.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === ``) return;

  addTask(text);
  resetForm();
});

cancelEditBtn.addEventListener(`click`, function () {
  resetForm();
});

filtersBar.addEventListener(`click`, function (e) {
  const filterBtn = e.target.closest(`.filter-btn`);
  if (!filterBtn) return;
  currentFilter = filterBtn.dataset.filter;
  render();
});

clearCompletedBtn.addEventListener(`click`, function () {
  clearCompletedTasks();
});

taskList.addEventListener(`click`, function (e) {
  const actionEl = e.target.closest(`[data-action]`);
  if (!actionEl) return;

  const id = Number(actionEl.dataset.id);
  const action = actionEl.dataset.action;

  if (action === `toggle`) {
    toggleTaskCompleted(id);
  } else if (action === `delete`) {
    deleteTask(id);
  } else if (action === `edit`) {
    editingTaskId = id;
    renderTaskList();
    const input = taskList.querySelector(`.task-text-input[data-id="${id}"]`);
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  } else if (action === `save`) {
    const input = taskList.querySelector(`.task-text-input[data-id="${id}"]`);
    const newText = input ? input.value.trim() : ``;
    if (newText === ``) return;
    editingTaskId = null;
    updateTaskText(id, newText);
  } else if (action === `cancel-edit`) {
    editingTaskId = null;
    renderTaskList();
  }
});

taskList.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter` && e.target.classList.contains(`task-text-input`)) {
    e.preventDefault();
    const id = Number(e.target.dataset.id);
    const newText = e.target.value.trim();
    if (newText === ``) return;
    editingTaskId = null;
    updateTaskText(id, newText);
  }
  if (e.key === `Escape` && e.target.classList.contains(`task-text-input`)) {
    editingTaskId = null;
    renderTaskList();
  }
});

render();