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

const form = document.getElementById("userForm");

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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  oname.textContent = nameInput.value;
  oage.textContent = ageInput.value;
  obirth.textContent = birthInput.value;
  ogender.textContent = genderInput.value;
  oaddress.textContent = addressInput.value;
  ocontact.textContent = contactInput.value;
  oemail.textContent = emailInput.value;
  ocourse.textContent = courseInput.value;
  oyear.textContent = yearInput.value;
  ohobbies.textContent = hobbiesInput.value;
});
