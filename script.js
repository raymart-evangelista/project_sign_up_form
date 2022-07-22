const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMisMatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  }

  emailError.className = 'error active';
}

// function validatePassword() {
//   confirm_pass.setCustomValidity( pass.value !=
//     confirm_pass.value ? "Passwords Don't Match" : '');
// }