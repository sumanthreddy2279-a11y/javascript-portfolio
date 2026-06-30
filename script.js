// ===============================
// Portfolio JavaScript
// ===============================

console.log("Portfolio Loaded Successfully");

// ===============================
// Dark Mode Toggle
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        darkModeBtn.innerHTML="☀️ Light Mode";

    }
    else{

        localStorage.setItem("theme","light");

        darkModeBtn.innerHTML="🌙 Dark Mode";

    }

}

// Load Theme

window.addEventListener("load", function () {

    // Welcome Popup
    alert("👋 Welcome to Arumulla Sumanth Reddy's Portfolio Website!");

    // Load Dark Mode Preference
    if (localStorage.getItem("theme") == "dark") {

        document.body.classList.add("dark-mode");

        darkModeBtn.innerHTML = "☀️ Light Mode";

    }

});

// ===============================
// Contact Form Validation
// ===============================

const form=document.getElementById("contactForm");

const formMessage=document.getElementById("formMessage");

form.addEventListener("submit",validateForm);

function validateForm(event){

event.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""){

showError("Name cannot be empty");

return;

}

if(!email.includes("@") || !email.includes(".")){

showError("Please enter a valid email");

return;

}

if(message.length<10){

showError("Message must contain at least 10 characters");

return;

}

showSuccess("Message sent successfully!");

form.reset();

}

// ===============================
// Error Message
// ===============================

function showError(message){

formMessage.style.color="red";

formMessage.innerHTML=message;

}

// ===============================
// Success Message
// ===============================

function showSuccess(message){

formMessage.style.color="green";

formMessage.innerHTML=message;

}

// ===============================
// Show / Hide About Section
// ===============================

const aboutSection=document.getElementById("about");

const toggleButton=document.createElement("button");

toggleButton.innerHTML="Hide About";

toggleButton.style.marginBottom="20px";

aboutSection.prepend(toggleButton);

toggleButton.addEventListener("click",function(){

if(aboutSection.querySelector("p").style.display==="none"){

aboutSection.querySelector("p").style.display="block";

toggleButton.innerHTML="Hide About";

}

else{

aboutSection.querySelector("p").style.display="none";

toggleButton.innerHTML="Show About";

}

});

// ===============================
// Greeting Message
// ===============================

const hour=new Date().getHours();

const hero=document.querySelector(".hero h2");

if(hour<12){

hero.innerHTML="🌞 Good Morning, Welcome!";

}
else if(hour<18){

hero.innerHTML="☀️ Good Afternoon, Welcome!";

}
else{

hero.innerHTML="🌙 Good Evening, Welcome!";

}
// ===============================
// Project Gallery
// ===============================

const galleryImages = [
    "images/project1.png.jpeg",
    "images/project2.png.jpeg",
    "images/project3.png.jpeg",
    "images/project4.png.jpeg",
];

let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showImage(index) {
    galleryImage.src = galleryImages[index];
}

nextBtn.addEventListener("click", function () {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    showImage(currentImage);

});

prevBtn.addEventListener("click", function () {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    showImage(currentImage);

});
// ===============================
// Automatic Image Slider
// ===============================

setInterval(function () {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    showImage(currentImage);

}, 3000);
// ===============================
// To-Do List
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addTaskBtn.addEventListener("click", addTask);

function addTask() {

    const task = taskInput.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();

}

function displayTasks(){

    taskList.innerHTML = "";

    tasks.forEach(function(task,index){

        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="deleteBtn" onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}