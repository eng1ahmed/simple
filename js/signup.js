let form = document.getElementById("logform");
let userName = document.getElementById("userName");
let password = document.getElementById("Password");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

form.onsubmit = addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "../index.html";
  let userData = {
    username: userName.value,
    Password: password.value,
    email: email.value,
    phone: phone.value,
  };
  localStorage.userName = userData.username;
  localStorage.password = userData.Password;
});
