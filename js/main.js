const menu = document.getElementById("menu");
const showMenu = document.getElementById("show-menu");
const closeMenu = document.getElementById("close");

showMenu.addEventListener("click", function () {
  menu.classList.toggle("hide");
});
closeMenu.addEventListener("click", function () {
  menu.classList.toggle("hide");
});
