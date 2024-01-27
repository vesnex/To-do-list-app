// JavaScript code to handle task and calendar functionality
// You'll need to implement the task and calendar logic here
var btn = document.querySelector("#btn");
var body = document.querySelector(".bg1");
var text = document.querySelector(".bg");

let flag = 0;

btn.addEventListener("click", function() {
    console.log("Button clicked, flag is currently: " + flag);
    if (flag == 0) {
        body.style.backgroundColor = "rgb(0, 0, 0)";
        text.style.color = "yellow";
        btn.style.color = "yellow";
        btn.style.backgroundColor = "rgb(0, 0, 0)";
        flag = 1;
        console.log("Flag updated to: " + flag);
    } else if (flag ==  1){
        body.style.backgroundColor = "#f3f4f6";
        text.style.color = "black";
        btn.style.backgroundColor = "#f3f4f6";
        btn.style.color = "black";
        btn.style.fontSize = "30px";
        flag = 0;
        console.log("Flag updated to: " + flag);
    }
});

const taskSections = {
    work: document.getElementById("work"),
    personal: document.getElementById("personal"),
    family: document.getElementById("family"),
};

const taskInput = {
    work: document.getElementById("work-task-input"),
    personal: document.getElementById("personal-task-input"),
    family: document.getElementById("family-task-input"),
};

const taskLists = {
    work: document.getElementById("work-tasks"),
    personal: document.getElementById("personal-tasks"),
    family: document.getElementById("family-tasks"),
};

// Sample task data
const tasks = {
    work: [],
    personal: [],
    family: [],
};

function renderTasks(category) {
    const taskList = taskLists[category];
    taskList.innerHTML = '';

    // Create a flex container for the task list
    const flexContainer = document.createElement('div');
    // Use flex-wrap to wrap items

    tasks[category].forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'text-yellow-400 max-w-xs'; // Limit the width of task items
        
        // Create a checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${category}-task-${index}`;
        checkbox.className = 'mr-2';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                label.classList.add('canceled');
            } else {
                label.classList.remove('canceled');
            }
        });

        // Create a label for the task text and timestamp
        const label = document.createElement('label');
        label.htmlFor = `${category}-task-${index}`;
        label.innerHTML = `<span>${task.text}</span> - <span class="text-green-700">${task.time}</span>`;

        li.appendChild(checkbox);
        li.appendChild(label);

        flexContainer.appendChild(li);
    });

    taskList.appendChild(flexContainer); // Append the flex container to the task list
}
// ...

function addTask(category) {
    const inputElement = taskInput[category];
    const taskText = inputElement.value.trim();

    if (taskText !== '') {
        const timestamp = new Date().toLocaleString(); // Get the current timestamp
        tasks[category].push({ text: taskText, time: timestamp });
        renderTasks(category);
        inputElement.value = ''; // Clear the input field
    }
    
}




// Show the selected task section when clicking on a sidebar link
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const category = event.target.getAttribute("href").substring(1); // Get the category from the href
        Object.values(taskSections).forEach((section) => {
            section.classList.add("hidden");
        });
        taskSections[category].classList.remove("hidden");
    });
});

