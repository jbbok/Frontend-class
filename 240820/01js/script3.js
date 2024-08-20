// * iterable : 순서대로 처리할 수 있는
// * iterator
// iterable 객체 : 객체 안에 담겨있는 각각의 독립적인 아이템 요소를 찾아서 어떤 실행을 순서대로 처리할 수 있도록 할 수 있는 객체

// JS안에서 iterable한 객체? 배열과 문자열
// for in 문 (*객체)

// < iterable 객체가 되기 위한 조건 >
// 1) for ... of 반복문을 무조건 쓸 수 있어야 함
// 2) 전개연산자 구문을 쓸 수 있어야 함 (배열,정렬)
// 3) 구조분해할당이 가능해야 함
// (일반 객체 자체는 구조분해할당이 가능하나 위 2가지는 쓸 수 없기 때문에 객체는 이터러블하지 않음!)

let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator](); // Symbol

console.log(it); // 이터러블한 객체가 됨
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 이터러블한 객체가 되려면 => 이터레이터 객체 속성을 가지고 있어야 함!
// 이터레이터 객체 속성은 반드시 next()라는 메서드 함수를 갖고 있음
// next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수

// ---------------------------------

// * generator
// 이터러블하지 못한 데이터 자료구조
// 반복문x

// 제너레이터는 함수임
// 태생적으로 이터러블하지 못한 요소들을 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

// function fnc() {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// }

// fnc();

// 이터러블한 속성을 갖게 하고싶음
function* fnc() {
  // *제너레이터 함수는 꼭 별표를 붙임
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc(); // g1에 fnc 함수 값을 반환하겠다
console.log(g1);

// console.log(g1.next()); // g1은 이터러블한 객체가 됨
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}
// for문 사용 가능해짐 => 이터러블한 객체가 됐다````````
