const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //=document.querySelector(#todo-form input)
const toDoList = document.getElementById("todo-list");

let toDos = []; //ToDo를 저장하기 위한 array

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array String 저장
}

function deleteToDo(event) {
  const delete_li = event.target.parentElement; //타겟 지정 -> 클릭 이벤트가 일어난 타겟의 부모 엘리먼트 저장
  delete_li.remove(); //해당 부모 엘리먼트 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delete_li.id)); //Filter
  saveToDos();
}

function paintToDo(newTodo) {
  const paint_li = document.createElement("li"); //li생성
  paint_li.id = newTodo.id; //li id부여
  const paint_span = document.createElement("span"); //span생성
  paint_span.innerText = newTodo.text; //span안에 내용(매개변수) 넣기
  const paint_button = document.createElement("button");
  paint_button.innerText = "❌";
  paint_button.addEventListener("click", deleteToDo);
  paint_li.appendChild(paint_span); //li안에 span넣기
  paint_li.appendChild(paint_button); //li안에 button넣기
  toDoList.appendChild(paint_li);
}

function ToDoSubmit(event) {
  event.preventDefault(); //새로고침 방지
  const newTodo = toDoInput.value; //새로운 리스트 저장
  toDoInput.value = ""; //사용자 입력 값 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //Todo array Push
  paintToDo(newTodoObj); //리스트 그리기 입력값 매개변수 넘기기
  saveToDos(); //ToDo 저장하기
}

toDoForm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage 내용 저장
if (savedToDos !== null) {
  //localStorage가 null이 아니라면
  const parsedToDos = JSON.parse(savedToDos); //ToDo array화
  toDos = parsedToDos; //이전 ToDo 저장
  parsedToDos.forEach(paintToDo);
}
