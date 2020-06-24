// Adding event listeners to  the form inputs

document.getElementById("name").addEventListener("blur", nameValidation);
document.getElementById("email").addEventListener("blur", emailValidation);
document
  .getElementById("password")
  .addEventListener("blur", passwordValidation);
document.getElementById("signUp").addEventListener("click", checkForm);

//Input Variables
const password = document.getElementById("password");
const email = document.getElementById("email");
const name = document.getElementById("name");
//Creating the functions to validate the user input

function nameValidation() {
  const re = /^[a-zA-Z]{2,15}$/;
  const error = document.getElementById("invalidName");
  if (!re.test(name.value)) {
    error.classList.add("showError");
  } else {
    error.classList.remove("showError");
  }
}

function emailValidation() {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const error = document.getElementById("invalidEmail");
  if (!re.test(email.value)) {
    error.classList.add("showError");
    console.log("hello");
  } else {
    error.classList.remove("showError");
  }
}

function passwordValidation() {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const error = document.getElementById("invalidPassword");
  if (!re.test(password.value) || password.value == "") {
    error.classList.add("showError");
  } else {
    error.classList.remove("showError");
  }
}

function checkForm(e) {
  const terms = document.getElementById("terms");
  const invalidName = document.getElementById("invalidName");
  const invalidEmail = document.getElementById("invalidEmail");
  const invalidPassword = document.getElementById("invalidPassword");

  if (
    terms.checked == false ||
    invalidName.classList.contains("showError") ||
    password.value == "" ||
    invalidEmail.classList.contains("showError") ||
    email.value == "" ||
    invalidPassword.classList.contains("showError") ||
    name.value === ""
  ) {
    document.getElementById("invalidFormSubmission").classList.add("showError");
  } else {
    window.location.href = "signedIn.html";
  }

  e.preventDefault();
}
