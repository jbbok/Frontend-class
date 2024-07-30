let x = 10;
let y = 4;

// 사칙연산 + - * /
// const result = x + y;
// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// % 나누기 후 나머지 값을 찾아오는 연산자
// result = x % y;
// console.log(result);

// 증감연산자 ++ --
// x--;
//연산자가 앞에 있으면 감소 먼저 한거임 - 값 나중에
// console.log(x);

// console.log(--x);
// 연산자가 뒤에 있으면 콘솔에 값만 먼저 찍힌거임 - 감소 나중에

// for (let i = 0(얘 먼저); i < 3(두번째); i++(얘가 마지막!!!)) {
//   const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력!")); arr.push(userNum); (3번째)

// y++; // 증가연산자

// console.log(y);

// y = y + x;
// y += x; // 둘이 같음

// y = y - x;
// y -= x;

// let str = "<table border='1'>";
// // str = str = "<tr>";
// // str = str + "</tr>";
// str += "<tr>"; // 둘이 같음
// str += "<td>1</td><td>2</td>";
// str += "</tr>";
// str += "</table>";

// document.write(str);

// console.log(2 === "2");

// let varText = 2;
// varText = "hi";
// 최초의 변수에 타입을 줬으면 그 후에 다른 타입이 절대 올 수 없음(엄격)
// 숫자한텐 숫자만

// 제어문/조건문
// if(조건식 공간 => true) {
//   실행문 공간 실행
// }

// if (x > 5) {
//   console.log(`${x}는 5보다 큽니다!`);
// }

// if (x < 20) {
//   console.log(`${x}은 20보다 작습니다!`);
// }

// 여러번 if 조건문을 쓸 수 있지만 이걸 간결하게 쓰기 위해

// if(조건식) {
//   // 조건식이 true일 때
// } else {
//   // 조건식이 false일 때
// }

// const userInput = prompt("이름을 입력하세요!");

// if (userInput === null) {
//   alert("취소했습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

const score = Number(prompt("자바스크립트 시험점수!"));

// if (score !== null) {
//   //예외조항처리 (예외조항처리할 때 중첩if문 씀)
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }
// if (score !== null) {
//   if (score >= 90) alert("A 학점");
//   else if (score >= 80) alert("B 학점");
//   else alert("C학점");
// }

const num1 = 10;
const num2 = 20;

// 지역변수
// if (num1 < num2) {
//   const small = num1;
// } else {
//   const small = num2;
// }

// console.log(small);
// 얜 전역변수인데 찾아오려고 해서 못 찾는 중

// let small;

// if (num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }

// console.log(small);

small = num1 < num2 ? num1 : num2;
