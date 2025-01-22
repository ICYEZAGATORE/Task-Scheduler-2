// JavaScript: Task Scheduler

// Select the form, input, and task list elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

// Add an event listener to the form to handle task submission
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const taskText = taskInput.value.trim(); // Get the task text and trim whitespace
  const taskDateValue = taskDate.value; // Get the selected date
  const taskTimeValue = taskTime.value; // Get the selected time

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  if (taskDateValue === "" || taskTimeValue === "") {
    alert("Please select a date and time.");
    return;
  }

  // Create a new task element
  const taskItem = document.createElement("li");
  taskItem.textContent = `${taskText} (Due: ${taskDateValue} at ${taskTimeValue})`;

  // Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem); // Remove the task item from the list
  });

  // Append the delete button to the task item
  taskItem.appendChild(deleteButton);

  // Add the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input fields
  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
});
