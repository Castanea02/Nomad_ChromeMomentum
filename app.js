const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function Mouseenter() {
  //마우스가  들어갈  때
  h1.innerText = "Mouse is here!";
}

function Mouseleave() {
  //마우스가  나갈 때
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  //창 크기 변경 할 때
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  //사용자가 복사할 때
  alert("copier!");
}

function handleWindowOffline() {
  //와이파이 연결 안 됨
  alert("SOS no Wifi");
}

function handleWindowOnline() {
  //와이파이 연결
  alert("yes Wifi!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", Mouseenter);
h1.addEventListener("mouseleave", Mouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
