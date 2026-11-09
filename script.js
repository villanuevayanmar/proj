// Get the form and its input elements.
const form = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const birthInput = document.getElementById("birthday");
const genderInput = document.getElementById("gender");
const addressInput = document.getElementById("address");
const contactInput = document.getElementById("contact");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const yearInput = document.getElementById("year");
const hobbiesInput = document.getElementById("hobbies");

// Get the output area and message element.
const outputBox = document.getElementById("outBox");
const formMessage = document.getElementById("formMessage");

// Get the elements where the submitted information will appear.
const oname = document.getElementById("oName");
const oage = document.getElementById("oAge");
const obirth = document.getElementById("oBirthday");
const ogender = document.getElementById("oGender");
const oaddress = document.getElementById("oAddress");
const ocontact = document.getElementById("oContact");
const oemail = document.getElementById("oEmail");
const ocourse = document.getElementById("oCourse");
const oyear = document.getElementById("oYear");
const ohobbies = document.getElementById("oHobbies");

// Run this function when the user submits the form.
form.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page.
  event.preventDefault();

  // Make sure the birthday is not in the future.
  const selectedBirthday = new Date(birthInput.value + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedBirthday > today) {
    formMessage.textContent = "Birthday cannot be a future date.";
    birthInput.focus();
    return;
  }

  // Get the information from the inputs and display it safely as text.
  oname.textContent = nameInput.value.trim();
  oage.textContent = ageInput.value;
  obirth.textContent = selectedBirthday.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  ogender.textContent = genderInput.value;
  oaddress.textContent = addressInput.value.trim();
  ocontact.textContent = contactInput.value.trim();
  oemail.textContent = emailInput.value.trim();
  ocourse.textContent = courseInput.value.trim();
  oyear.textContent = yearInput.value;
  ohobbies.textContent = hobbiesInput.value.trim() || "Not provided";

  // Show the results after the form is submitted.
  outputBox.hidden = false;
  formMessage.textContent = "Your information has been displayed below.";
});

// Clear the displayed information when the form is reset.
form.addEventListener("reset", function () {
  outputBox.hidden = true;
  formMessage.textContent = "The form has been cleared.";
});
