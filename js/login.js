let form = document.getElementById("logform");
let userName = document.getElementById("userName");
let password = document.getElementById("Password");

let userData = {
  username: "Admin",
  Password: "Admin",
};
form.onsubmit = addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    userName.value == userData.username &&
    password.value == userData.Password
  ) {
    window.location.href = "./html/home.html";
  } else {
    alert("your username or password is not correct");
  }
});
