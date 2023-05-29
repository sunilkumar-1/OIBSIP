document.addEventListener('DOMContentLoaded', function() {
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addButton = document.getElementById('addButton');
    const taskList = document.querySelector('#taskList tbody');
  
    addButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      const taskTitle = taskTitleInput.value;
      const taskDescription = taskDescriptionInput.value;
  
      if (taskTitle.trim() === '') {
        return;
      }
  
      const taskRow = document.createElement('tr');
      const titleCell = document.createElement('td');
      const descriptionCell = document.createElement('td');
      const actionsCell = document.createElement('td');
      const deleteButton = document.createElement('button');
  
      titleCell.textContent = taskTitle;
      descriptionCell.textContent = taskDescription;
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';
  
      actionsCell.appendChild(deleteButton);
      taskRow.appendChild(titleCell);
      taskRow.appendChild(descriptionCell);
      taskRow.appendChild(actionsCell);
  
      deleteButton.addEventListener('click', function() {
        taskRow.remove();
      });
  
      taskRow.addEventListener('click', function() {
        taskRow.classList.toggle('completed');
      });
  
      taskList.appendChild(taskRow);
  
      taskTitleInput.value = '';
      taskDescriptionInput.value = '';
    });
  });
  