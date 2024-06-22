document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.textContent = '';
    });
});

function addTask(task){
    const li = document.createElement('li');
    li.textContent = '';

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remover";
    removeButton.addEventListener('click', removeTask());

    li.appendChild(removeButton);
    taskList.appendChild(li);

    saveTask();
}

