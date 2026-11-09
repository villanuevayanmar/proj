// Cyber Tech demo login.
// This checks that both fields are filled; it does NOT verify real accounts.
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");

const previousMessage = sessionStorage.getItem("cyberTechLoginMessage");

if (previousMessage) {
  loginMessage.textContent = previousMessage;
  sessionStorage.removeItem("cyberTechLoginMessage");
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) {
    loginMessage.textContent = "Please enter both your username and password.";
    return;
  }

  if (username.length < 3) {
    loginMessage.textContent = "Your username must be at least 3 characters long.";
    usernameInput.focus();
    return;
  }

  // Keep only the demo username for this browser tab.
  // Never store the password in sessionStorage or localStorage.
  sessionStorage.setItem("cyberTechUsername", username);

  window.location.href = "dashboard.html";
});
