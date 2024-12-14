let form = document.getElementById("logform");
let userName = document.getElementById("userName");
let password = document.getElementById("Password");

form.onsubmit = addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    userName.value == localStorage.userName &&
    password.value == localStorage.password
  ) {
    window.location.href = "./html/home.html";
  } else {
    alert("your username or password is not correct");
  }
});
