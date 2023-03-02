const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저 기본동작 방지(submit 새로고침 방지)
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 CSS 숨기기

  const username = loginInput.value; //사용자 이름 저장
  greeting.innerText = `Hello ${username}`; //입력 값 표현
  greeting.classList.remove(HIDDEN_CLASSNAME); //사용자 입력값 포함 숨김 제거후 표현
}

loginForm.addEventListener("submit", onLoginSubmit);
