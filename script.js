let i = 0;

function imgsrc(id) {
  if (i == 0) {
    id.src = "img/liked.svg";
    i = 1;
  } else {
    id.src = "img/like.svg";
    i = 0;
  }
}

const btn = document.getElementById("navbar_toggler");
const menus = document.querySelector(".nav");
const icons = document.querySelector(".icons");
const heads = document.querySelector(".head");
function Show() {
  menus.classList.toggle("show");
  icons.classList.toggle("show");
  heads.classList.toggle("header");
}
