// Check whether this browser tab has an active demo session.
const username = sessionStorage.getItem("cyberTechUsername");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutBtn");

if (!username) {
  // Return visitors without a demo session to the login page.
  sessionStorage.setItem(
    "cyberTechLoginMessage",
    "Please enter the demo login details before opening the dashboard."
  );

  window.location.replace("index.html");
} else {
  welcomeMessage.textContent = "Welcome, " + username + "!";
}

// End the demo session when Logout is selected.
logoutButton.addEventListener("click", function () {
  sessionStorage.removeItem("cyberTechUsername");
  window.location.replace("index.html");
});
