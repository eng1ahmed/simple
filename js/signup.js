let form = document.getElementById("logform");
let userName = document.getElementById("userName");
let password = document.getElementById("Password");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
// ###################
function validatePassword(password) {
  const regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/;
  return regex.test(password);
}
function validateUsername(username) {
  const regex = /^[a-zA-Z]+(?:_[a-zA-Z]+)*$/;
  const cleanedUsername = username.replace(/\s+/g, "_"); // Replace spaces with underscores
  return regex.test(cleanedUsername);
}
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
function validatePhoneNumber(phoneNumber) {
  const regex = /^\+?(\d{10,13})$/;
  return regex.test(phoneNumber);
}

//##########################
form.onsubmit = addEventListener("submit", (event) => {
  let validateUser = validateUsername(userName.value.toLowerCase());
  let isValid = validatePassword(password.value);
  let emailvalid = validateEmail(email.value);
  let phonevalid = validatePhoneNumber(phone.value);
  if (validateUser === false) {
      confirm("username must contain no special charcters and numbers");
  }
  if (emailvalid === false) {
      confirm("please enter valid email");
  }
  if (phonevalid === false) {
      confirm("please enter valid phone number");
    }
    if (isValid === false) {
      confirm(
        "password must contain at least 1 (special charcter & number & uppercase letter & lower case letter) and must be at least 8 charcter"
      );
    }
    if (validateUser && isValid && emailvalid && phonevalid === true) {
        window.location.href = "../index.html";
      localStorage.userName = userName.value;
      localStorage.password = password.value;
    }
    event.preventDefault();
});
