// Get the elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    
    // Add task text
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    // Append to the list
    taskList.appendChild(li);
    
    // Clear input field
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}

// Function to delete task
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
