var hamburger = document.querySelector("#hamburger");

var menu = document.querySelector("#menu");

hamburger.addEventListener("click", function() {
  console.log("Hamburger was clicked");
  menu.classList.toggle("active");
});