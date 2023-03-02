const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function Mouseenter() {
  title.innerText = "Mouse is here!";
}

function Mouseleave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", Mouseenter);
title.addEventListener("mouseleave", Mouseleave);
