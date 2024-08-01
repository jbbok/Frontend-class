// 함수 선언!

// 원래 함수를 선언할 땐 function을 꼭 넣어야했음
// function 함수이름(매개변수=인자값 / 매개변수는 인자값이 줄 수 있음) {}
// 함수의 매개변수는 필요하면 쓰는 것이고, 안필요하면 안 써도 가능함! (필수 아님)
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값 삽입!

// function calcSum(str) { //str : 매개변수
//   prompt(`${str}`);
// }

// calcSum("아이언맨"); // "아이언맨" : 인자값

// 함수의 정석 모양 / 일반함수 / 익명함수
// function calcSum() {
//   let Sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum();

// 익명함수
// const calcSum = function () {
//   let Sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// //  화살표(=> : 화살표 모양이 function 키워드를 대체할 수 있도록) 함수
// const calcSum = () => {
//   let Sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// ---------

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`)
// }

// sum(1, 2);

// ---------

// const num = Number(prompt("숫자를 입력하세요")); // 1 변수에 값을 받고

// function calcSum(n) {
//   // 3 인자값을 매개변수 자리에 넣음
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum + -i;
//   }

//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(num); // 2 인자값으로 받아오고

// -------------

// 리턴함수
// const num = Number(prompt("숫자를 입력하세요"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum + -i;
//   }

//   return sum;
//   // 리턴 : 이 함수의 결과값을 반환하고 싶을 때
// }

// calcSum(num);

// alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);

// -----------

// function add(x,y) {
// console.log(x + y);
// }

// add(2, 5);

// ----------

// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }

// multiple(2, 4, 8);
// multiple(2, 4);

// 올리브영 프론트엔드 개발자일 때!
// 회원가입 -> *이름 a, *나이 b, (옵션)피부타입 c
// 옵션에 입력이 안됐을 때 기본값(c)을 설정해서 넣음

// --------

document.body.innerHTML += `<button id=btn>Click!</button>`;

const button = document.querySelector("#btn");
// 인자값을 .querySelector 얘한테 줌
// console.log(button);

// 방법1
// button.addEventListener("click", function () {
//   alert("클릭했습니다!");
// }); // 함수 호출한거임

// 방법2
function display() {
  alert("클릭했습니다!");
}

button.addEventListener("click", display);
