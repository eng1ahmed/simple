let home = document.getElementById("home");
let cards = document.getElementById("cards");
let blog = document.getElementById("blog");
let logout = document.getElementById("logout");

home.onclick = function () {
  window.location.href = "../html/home.html";
};
cards.onclick = function () {
  window.location.href = "../html/cards.html";
};
blog.onclick = function () {
  window.location.href = "../html/blog.html";
};
logout.onclick = function () {
  window.location.href = "../index.html";
};
