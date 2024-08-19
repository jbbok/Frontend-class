// JS ES6 => 혼종!
// map & set
// 배열 & 객체
// 배열 : 인덱스 / 개수 / 넣고, 빼고 / 객체처럼 프로퍼티 형태를 갖고있지 못함!
// 객체 : 프로퍼티 형태 (*어떤 자료가 무슨 의미인지)
// 배열 + 객체 => 울버린이 필요! => map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점!
// : 중복되는 값을 제어할 수 없음

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);
// 배열의 자료형태
console.log(myCup.size);

myCup.set("type", "mini");
// 맨 위에 써둔 set함수와 바로 위 set은 다른 애임!

console.log(myCup);
// map은 set함수를 거쳐가야함! 값을 추가 할 수 있음!
