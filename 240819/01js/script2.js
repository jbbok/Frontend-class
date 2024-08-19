// 1. 매개변수 기본값

const hello = (name, message = "안녕하세요!") => {
  console.log(`${name}님! ${message}`);
};

hello("서강준", "반갑습니다!");
hello("안효섭");

// 2. 전개연산자

// 1) 함수의 매개변수

const addNum = (...numbers) => {
  // const result = num01 + num02; // 인자값이 매개변수의 수보다 많아도 앞에 2개만 가져옴

  // return result;

  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
};

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3));
console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입 변수값의 독립화

// const fruits = ["apple", "banana", "cherry"];
// const favorite = fruits;
// 원본 데이터(fruits)의 배열도 변경이 됨

// favorite[1] = "grape";

const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];
// 전개연산자 구문을 이용하면 원본데이터는 두고 새로운 데이터를 만드는 것 (많이 씀!)

favorite[1] = "grape";

console.log(fruits, favorite);

// 3) 서로 다른 2개의 배열을 하나로 병합

const animal = ["tiger", "cat"];
const fruits01 = ["melon", "finealpple"];

console.log(animal.concat(fruits01));
// 4개의 값을 하나로 만들 수 있음 (전개연산자로도 할 수 있어서 concat 사용빈도가 줄어듬)
console.log([animal, fruits01]); // 배열 안의 배열(중첩배열)이 됨
console.log([...animal, ...fruits01]); // ...찍어서 전개연산자 만들면 그냥 배열이 됨!

// 4) 구조분해할당, 전개연산자 구문
let [teacher, ...students] = ["kim", "Lee", "Park", "Choi"];
console.log(teacher, students);

// 3. 객체 key 접근방법
// 대괄호 표기법이란게 생김

// 배열은 대괄호 표기[] / 객체는 중괄호{}
// 변수도 객체!
const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024-08-19"; // 온점 표기법

console.log(book);

console.log(book["title"]); // 대괄호 표기법

// 객체 키 생성 방법

// // const fn = () => {
// // return "result";
// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   // result: "함수 키",
//   [fn()]: "함수 키",
//   // [add(10, 20)]: "계산 키",
//   [`${add(10, 20)}key`]: "계산 키",
// };

// console.log(obj);

// 객체 축약법

let user = {
  name: "슛돌이",
};

user.age = 25;

console.log(user);

// 객체 선언시, key의 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일하다면 한번만 써도 가능! (반드시 동일할 경우!)

const makeUser = (name, age) => {
  return {
    // name: name,
    // age: age,
    name,
    age,
  };
};

const user1 = makeUser("서강준", 31);

console.log(user1);

// 객체에 심벌키 사용방법

let id1 = Symbol();
let id2 = Symbol();
// symbol은 유일무이한 값을 설정하고자 할 때 씀!

console.log(id1 === id2);

const id = Symbol("id");
// = id라는 이름을 부여받은 유일무이한 값
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    // prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

// 객체 안에 있는 key값을 은폐하고 싶을 때 사용 가능!

// 모양 잘 기억해두기!
console.log(member[id]); // 이건 대괄호 표기법이 아님~~ 그러려면 ["id"]여야 됨!
// console.log(member[tel]());
// 소괄호를 쓰면 심볼을 통해서 만든 내용을 출력할 수 있음!

// 4. 구조분해할당
// JS 컴포넌트화 => 함수형 // 예전에 쓰던 건 Class

const fruits02 = ["사과", "복숭아"];
// 값을 분해하고자 하는 원본데이터의 형태를 따라감

// const apple = fruits02[0];
// const peach = fruits02[1];

const [apple, peach] = fruits02;
// 원본데이터가 지금 배열의 형태이므로 대괄호를 써주면 됨!

console.log(apple, peach);

// 객체의 구조분해할당
const member03 = {
  name: "Hwan",
  age: 31,
};

const { name: userName, age } = member03;
// name은 값을 받아오는 통로의 역할을 하고 userNAme이 값을 받아옴!
console.log(userName, age);

// 5. 배열 메서드
// map / filter / reduce
// map : 배열 안에 있는 아이템(=배열요소)들에게 특정 함수 안에 있는 기능을 동일하게 실행, 적용 => 새로운 배열로 다시 생성! / 가장 압도적인 forEach와의 차이점!

// ------------------

// 현장 투입 => 만들어는 낸다!
// 단적으로 내가 알고 있는

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map((number) => number * 2);

// console.log(newNumbers);
// console.log(numbers);

// const newNumbers01 = numbers.map((number, index) => index + number * 3);
// // 각각의 아이템, 인덱스, 배열 전체
// T => map: 똑똑이 / forEach : 돌격대장
// console.log(newNumbers01);

// ---------------------------

// filter

const scores = [90, 35, 64, 88, 45, 92];

const highScores = scores.filter((score) => score >= 85);
console.log(highScores);
console.log(scores);

// ---------------------------

// reduce (누산기) 누적시키는 계산기
// 컴퓨터의 중앙처리장치에서 더하기, 빼기, 곱하기, 나누기 등의 연산을 한 결과 등을 일시적으로 저장해 두는 레지스터를 누산기라고 한다.
// React.js => Middle Reducer 같은 개념

const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((total, current) => total + current, 0);

console.log(result);

// total : 일종의 계산기. 연산된 값을 누적 및 저장해놓는 변수의 역할
// reduce의 첫번째 인자값 = (total, current) => total + current
// reduce의 두번째 인자값 = 0

// TS => 고차함수

// 명령형 & 선언형 프로그래밍 함수
// 저급함수
// 고급함수 => 1) 커스터마이징
