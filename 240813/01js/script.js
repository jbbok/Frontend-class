//  1. 사용자로부터 input태그를 통해서 입력값을 받는다

//  2. 입력값이 확인되면, ul 태그 자식요소로 하나씩 추가해준다.

//  3. ul 태그 자식 요소 중 삭제 버튼을 클릭했을 때, 버튼을 포함하고 있는 부모요소를 확인 후 같이 삭제해준다.

// 4. 사용자가 입력한 값이 영구적으로 보관될 수 있도록 localstorage를 활용해서 값을 저장시킨다.

// 5. 사용자가 값을 입력하면 다이렉트로 UI화면에 출력되는 것이 아니라, 이제부터는 localstorage 안에 저장된 값을 찾아와서 UI화면에 출력시키도록 한다

// 6. 삭제버튼을 클릭한다면, 직접적으로 UI화면 내 값을 삭제해주는 것이 아니라, localstorage 값을 먼저 삭제 후 삭제가 업데이트 된 값을 UI화면에 출력시켜준다.

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem(`todos`, JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  target.remove();
  todos = todos.filter((todo) => todo.id !== target.id);
  // 엄격한 비교 vs 느슨한 비교 / 형변환 (숫자vs문자)
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.createElementtext !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  userTodos.forEach((todo) => {
    addItem(todo);
  });

  todos = userTodos;
};

init();

form.addEventListener("submit", handler);

// console.log(todos);

// 로컬스토리지 : (삭제가 되지 않는다면) 반영구적으로 데이터 보관할 장소 필요 -> 로컬 컴도 자기의 역할이 있음 => 무한정 불가능

// 세션스토리지 : 임시기억장치 / 임시로 웹 브라우저를 켜놓은 상황(웹브라우저가 작동되고 있을 때) 컴퓨터가 꺼지지 않은 실행되고 있는 상태

// 로컬스토리지에 데이터를 저장하는 방법
// 로컬스토리지에 있는 데이터를 가져오는 방법
// localStorage.setItem("Hello", "world");
// const myData = localStorage.getItem("Hello");
// console.log(myData);

// 로컬스토리지에 있는 데이터를 삭제하는 방법
