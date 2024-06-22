document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTask()

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.textContent = '';
    });


    function addTask(task){
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remover";
        removeButton.addEventListener('click', removeTask);

        li.appendChild(removeButton);
        taskList.appendChild(li);

        saveTask();
    }

    function removeTask(e){
        e.target.parentElement.remove();
        saveTask();
    }

    function saveTask(){
        const tasks = [];
        taskList.querySelectorAll('li').forEach(element => {
            const taskText = element.childNodes[0].nodeValue.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('task', JSON.stringify(tasks));
    }

    function loadTask(){
        const tasks = JSON.parse(localStorage.getItem('task')) || [];
        tasks.forEach(element => addTask(element));
    }

});