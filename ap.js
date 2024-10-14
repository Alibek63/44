// Form Validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMessage").innerText = "Пожалуйста, заполните все поля.";
    } else {
        document.getElementById("formMessage").innerText = "Форма успешно отправлена!";
    }
});

// To-Do List
function addTask() {
    const task = document.getElementById("taskInput").value;
    if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}

// Number Sorting Tool
function sortNumbers(ascending) {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(Number).filter(n => !isNaN(n));

    if (ascending) {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }

    document.getElementById("sortedResult").innerText = "Отсортированные числа: " + numbers.join(", ");
}

// Change Background Color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Display Current Date and Time
function displayDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ru-RU', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    });
    document.getElementById("currentDateTime").innerText = formattedDate;
}
setInterval(displayDateTime, 1000);
