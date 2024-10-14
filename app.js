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
function changeBackgroundColor() {
    const colors = ["#f0f8ff", "#faebd7", "#ff6347", "#e6e6fa"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
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

// Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("guessMessage");

    if (guess === randomNumber) {
        message.innerText = "Правильно! Вы угадали число.";
    } else if (guess < randomNumber) {
        message.innerText = "Слишком мало! Попробуйте снова.";
    } else {
        message.innerText = "Слишком много! Попробуйте снова.";
    }
}
