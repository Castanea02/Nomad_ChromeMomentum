const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저 기본동작 방지(submit 새로고침 방지)
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 제거

  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername); //Local Storage 값 저장하기
  //삭제 .setRemove, 값 가져오기 .getItem

  paintGreetings(inputUsername); //폼 입력값을 매개변수로 paintGreetings함수 실행
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //매개변수 값으로 출력
  greeting.classList.remove(HIDDEN_CLASSNAME); //값 출력을 위해 hidden 클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //local storage username 값 가져와서 저장

if (savedUsername === null) {
  //입력 폼 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 폼 hidden 클래스 제거
  loginForm.addEventListener("submit", onLoginSubmit); //onLoginSubmit 함수 실행
} else {
  //greeting 출력
  paintGreetings(savedUsername);
}
