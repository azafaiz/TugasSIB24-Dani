document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) => item.classList.contains("active"));
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) => item.classList.contains("active"));
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

// Carousel Javascript DOM
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
};

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  changedItem.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();
    card.innerText = Math.floor(Math.random() * 8);
    changedItem.appendChild(card);
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});
