// 1.
const keyInput = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');
 
keyInput.addEventListener('keydown', (event) => {
    const message = document.createElement('p');
 
    message.textContent = `You pressed: ${event.key}`;
    if (event.key === 'Enter') {
        message.style.color = 'blue';
    } else {
        message.style.color = 'black';
    }
 
    keyLog.appendChild(message);
});

// 2.
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const feedbackMessage = document.querySelector('p');
 
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
 
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
 
  if (!username || !email || !password || !confirmPassword) {
    feedbackMessage.textContent = 'Missing some values, please try again!';
    feedbackMessage.style.color = 'red';
  } else if (password !== confirmPassword) {
    feedbackMessage.textContent = 'Password and confirm do not match, check again';
    feedbackMessage.style.color = 'red';
  } else {
    feedbackMessage.textContent = 'Your data is completed!';
    feedbackMessage.style.color = 'green';
    document.querySelector('form').reset();
  }
});

// 3.
const div = document.getElementById("container");
const btn = document.getElementById("btn");

div.addEventListener("click", () => {
  console.log("DIV - Capturing phase");
}, true);

div.addEventListener("click", () => {
  console.log("DIV - Bubbling phase");
}, false);

// Target phase
btn.addEventListener("click", () => {
  console.log("BUTTON clicked!");
});

// 4.
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    console.log("คุณคลิกปุ่ม:", event.target.textContent);
    console.log("ชนิดของ event:", event.type);
  });
});

