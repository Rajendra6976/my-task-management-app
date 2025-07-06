const subtasks = [];
const subtaskInput = document.getElementById('subtaskInput');
const subtasksList = document.getElementById('subtasksList');
const addSubtaskBtn = document.getElementById('addSubtask');
const taskForm = document.getElementById('taskForm');
const output = document.getElementById('output');

function renderSubtasks() {
  subtasksList.innerHTML = '';
  subtasks.forEach((sub, idx) => {
    const div = document.createElement('div');
    div.className = 'subtask-item';
    div.innerHTML = `
      <span>${sub}</span>
      <button class="remove-subtask" onclick="removeSubtask(${idx})">&times;</button>
    `;
    subtasksList.appendChild(div);
  });
}

window.removeSubtask = function(idx) {
  subtasks.splice(idx, 1);
  renderSubtasks();
};

addSubtaskBtn.onclick = function() {
  const val = subtaskInput.value.trim();
  if (val) {
    subtasks.push(val);
    subtaskInput.value = '';
    renderSubtasks();
  }
};

taskForm.onsubmit = function(e) {
  e.preventDefault();
  const task = {
    name: document.getElementById('taskName').value,
    priority: document.getElementById('priority').value,
    deadline: document.getElementById('deadline').value,
    repeat: document.getElementById('repeat').value,
    status: document.getElementById('status').value,
    labels: document.getElementById('labels').value,
    subtasks: [...subtasks]
  };
  output.textContent = 'Task Created: ' + JSON.stringify(task, null, 2);
  taskForm.reset();
  subtasks.length = 0;
  renderSubtasks();
};