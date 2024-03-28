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

let cards = document.querySelector(".cards");

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

const element = document.getElementById("myElementId");

function ShowStars(el) {
  const star = el.id;
  for (let i = 0; i < cards.children.length; i++) {
    for (let j = i; j < cards.children.length; j++) {
      if (cards.children[j].getAttribute("data_rait") == star) {
        replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
        insertAfter(replacedNode, cards.children[i]);
      }
    }
  }
}
