const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const usernameErrorSpan = document.getElementById('username-error');
const emailErrorSpan = document.getElementById('email-error');
const passwordErrorSpan = document.getElementById('password-error');

document.getElementById("submitButton").addEventListener("click", checkErrors);

function checkErrors() {
  checkInput(usernameInput, usernameErrorSpan);
  checkInput(emailInput, emailErrorSpan);
  checkInput(passwordInput, passwordErrorSpan);
}

function checkInput(input, errorSpan) {
  if (input.value === "") {
    showError(input, errorSpan, "This field must be filled");
  } else {
    clearError(input, errorSpan);
  }
}

function showError(input, errorSpan, message) {
  input.style.borderColor = "red";
  errorSpan.textContent = message;
}

function clearError(input, errorSpan) {
  input.style.borderColor = "green";
  errorSpan.textContent = "";
}

document.querySelectorAll("input").forEach(input => {
  const errorSpan = input.id === 'username' ? usernameErrorSpan :
                    input.id === 'email' ? emailErrorSpan : passwordErrorSpan;

  input.addEventListener("focus", () => {
    input.style.borderColor = "grey";
    errorSpan.textContent = "";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.style.borderColor = "red";
      errorSpan.textContent = "This field must be filled.";
    }
  });
});