// 문자열 && 배열
// 1) 둘 다 length 라는 공통점
// 2) 둘 다 (좌측에서부터,  0부터 시작하는)index를 갖고 있다

// ES6문법이 적용되기 전
// const str5 = "Hello, everyone";
// // const array5 = str5.split("");
// const array5 = [...str5];
// const str6 = array5.join(""); //구분자로 문자를 줌

// console.log(array5);
// console.log(str6);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// //slice에서 값을 1개만 쓰면 문자열을 그 끝까지 찾아옴
// const result = firstCh + remainStr;
// 연결연산자를 쓰면 됨

// const result = string[0].toUpperCase();
// const result = [string[0].toUpperCase()];
// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// 문자열을 배열로 바꿔서 가져올 수 있음 (gpt의 방법...)
// document.write(result);

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용하는지!

// 1) 생성자 함수
// let arr = new Array();
// arr[0] = "first";
// arr[1] = "second";

// console.log(arr);

// // let obj = new Object();

// // 2) 변수에 빈 배열을 할당 및 선언하는 방식
// let season = [];

// season[0] = "spring";
// season[0] = "summer";
// season[0] = "fall";
// season[0] = "winter";

// console.log(season);

// 3) 직접 배열을 선언하고 할당하는 방식
// const pets = ["dog", "cat", "rabbit"];
// pets[0] = "hamster";
// console.log(pets);
// console.log(pets.length);
// console.log(pets[0]); // 배열값을 찾아와서 수정하는 방법

// 배열 => 이터러블 객체
// 이터레이터 요소의 유무!
// 제너레이터 / map & set
// 반복문

// for / for of / forEach
// 배열 선언 값
// 1) 복수형
// 2)

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// (조건식)이 들어가고 조건식의 문이 참이어야 실행

// 초기값 / 범위 / 증감연산자

// for (let color of colors) {

// }

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });
// (`문자열[${인덱스값}] : ${인자값}`);

// colors.forEach((color, index, array) => {
//   //(참조변수들)
//   console.log(`[${array}][${index}] : ${color}`);
// });

// concat!!
// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];
// const meatBurger = vegitable.concat(meat, "빵");

// console.log(meatBurger);

// // 전개연산자
// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// reverse
// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// 1) 배열 선언할 때, 변수명 복수
// 2) 일반 for문 선언, 블록변수를 0으로 시작하는 것
// 3) 배열을 담는 변수를 선언할 때, const VS let을 염두에 두기!
// => 배열의 특정 메서드 함수들 => 새로운 배열을 생성해주는 메서드 함수들
// => 빈 배열을 먼저 생성해놓고  푸쉬? 쉬프트? ㅇㅅㅇ?를 사용해서 값을 추가하는 행위

// console.log(week);
// console.log(week.sort()); // sort함수 기본값이 오름차 순!

// console.log(values);
// console.log(values.sort()); // 대신 컴터가 생각하는 오름차순이라 11이 3보다 먼저 나옴

// sort 함수를 쓸 때는 개발자가 정의하고자 하는 함수를 콜백함수로 ★반드시 입력해야함!!!

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

// console.log(values); // 우리가 생각하는 오름차순 정렬이 됨!

// values.sort((a, b) => {
//   return a - b; // 오름차순
//   // return b - a; // 내림차순 (음수값에선 작아질수록 커짐)
// });

// console.log(values);

// let animals = ["lion", "bear", "bird"];

// console.log(animals);

// animals.pop();
// 배열의 가장 마지막 값을 제거하고 싶을 때 pop!

// console.log(animals);

// animals.push("tiger");
// 배열의 가장 뒤에서부터 값을 추가하고 싶을 때 push!

// console.log(animals);

// let fruits = ["apple", "pear", "banana"];

// fruits.shift();
// console.log(fruits);

// fruits.unshift("cherry");
// console.log(fruits);

// splice!! 는 원본데이터값을 변경시킴!!! 값을 찾아오는 것 뿐 아니라 그 공간에 값을 넣을 수도 있음! 잘못하면 원본값을 돌릴 수 없음!

let subjects = ["html", "css", "javascript", "react", "typescript"];

// console.log(subjects.splice(2));

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

console.log(week.splice(1, 5, "holiday"));

console.log(week);

//
let colors = ["red", "green", "blue", "white", "black"];

console.log(colors.slice(2));
console.log(colors.slice(1, 4));
