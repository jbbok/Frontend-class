// ★ 병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;

// console.log(numA ?? numB); // 삼항조건연산자와는 상관없음!

// ---------------------------------------------------

// ★ 삼항조건연산자
// const strA = "안녕하세요!";

// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님");

// ---------------------------------------------------

// ★ swich & case: 종결문 (break || return)
// const fruit = "pine";

// switch (fruit) {
//   case "apple":
//     console.log("사과");

//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는 과일 없음");
// }

// ---------------------------------------------------

// ★ 객체 Object 1 - 객체 생성 및 온점 표기법
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(typeof objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// ★ 객체 Object 2 - 구조분해할당
// const test0 = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

// // 객체 안에 있는 key값을 배열(=Object.keys())로 반환!
// const keyArrs = Object.keys(person);
// console.log(keyArrs);

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(value);
// });

// 구조분해할당
// const name = test0.name;
// const age = test0.age;
// const skill = test0.skill;
// 이렇게 하기엔 너무 번거로움 그러기에 구조분의할당을 한다. 이에 따른 조건
// const { name, age, skill } = test0;
// console.log(name, age, skill);

// ---------------------------------------------------

// ★ 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());
// console.log(calcA() || calcB());

// react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트!
// 가상돔 => 영화데이터를 찾아오도록하는 fetch()
// 정상적으로 fetch()를 통해서 불러오는 영화 api 데이터를 출력하지 못함(찾아오지x)

// 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야 하는 상황 => 20개

// 그래서 로딩스피너가 필요함!
// console.log(movieData && data.title);

// ---------------------------------------------------

// ★ 전개연산자 : 원래 있었던 값을 풀어헤쳐서 ??? 알맹이만 가져온다
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objB);

// 배열 메서드 특집!
let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");
// console.log(food, newLength);

// const removeItem = food.pop();
// console.log(removeItem);
// console.log(food);

// const newLength = food.unshift("갈비찜");
// console.log(food, newLength);

// const removeItem = food.shift();
// console.log(removeItem);
// console.log(food);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const sliced = food.slice(1);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);
// console.log(arrC);

// console.log(food.indexOf(""));

// console.log(food.includes("마라샹궈"));
// console.log(food.includes("피자"));

// const arr = [
//   { name: "divid" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];

// // item : 객체들 의미 (이름들)
// const element = arr.find((item) => item.name === "david");
// console.log(element);

// console.log(arr);

// const arr = [
//   { name: "슛돌이", hobby: "축구" },
//   { name: "통키", hobby: "피구" },
//   { name: "강속구", hobby: "야구" },
//   { name: "태백산", hobby: "피구" },
// ];

// const filterdArr = arr.filter((item) => item.hobby === "피구");
// const filterdArr = arr.filter((item) => {
//   return item.hobby === "피구";
// });

// console.log(filterdArr);
// console.log(arr);

// const arr1 = [10, 5, 3];
// arr1.sort(a - b);

// console.log(arr1);
// const compare = (a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
//   a - b // 내림차순
// };

// arr1.sort(compare);
// console.log(arr1);

// console.log(food.join()); // food안에 따옴표를 제외한 문자를 가져옴
// console.log(food.join("-")); //큰따옴표 안에 있는 요소들에 따옴표를 붙여서 가져옴(구분자)

const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);

console.log(result);
