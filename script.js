const pass = document.getElementById("password");
const passError = document.querySelector("#password + span.error");
const confirmPass = document.getElementById("confirm-pass");

pass.addEventListener("input", function (event) {
  if (pass.validity.valid) {
    if (pass.value != confirmPass.value) {
      showConfirmError();
    } else {
      passError.textContent = "";
      passError.className = "error";
    }
  } else {
    showPassError();
  }
});

confirmPass.addEventListener("input", function (event) {
 if (confirmPass.value != pass.value) {
  showConfirmError();
 } 

 if (confirmPass.value == pass.value) {
  pass.setCustomValidity("");
  passError.textContent = "";
  passError.className = "error";
 }
})

function showConfirmError() {
  passError.textContent = "Passwords do not match!";
  passError.className = "error active";
}

function showPassError() {
  passError.className = "error active";
}