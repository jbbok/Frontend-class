// 함수에서 만날 수 있는 전개연산자 구문

const fruits = ["apple", "banana", "grape"];

// console.log(fruits); -> 배열
// console.log(...fruits); // -> 문자열

// function addNum(매개변수) {
// 함수의 실질적 실행문
// } => 함수의 선언문

// addNum() => 함수 호출

// 아래랑 같음! 줄일 수 있다면 줄여서! 간단하게!
// function addNum(a, b) {
//   const sum = a + b;
//   return sum;
// }

// addNum(1, 3);

// ---
// function addNum(a, b) {
//   return a + b;
// }

// // addNum(1, 3);
// console.log(addNum(1, 3)); // 얜 숫자가 더 입력되도 1, 3만 가져올 수 있음!

// ---
// function addNum(...numbers) { // 사용자가 입력한 값이 몇 개던 개수와 상관없이 하나하나 풀어헤쳐서 모두 가져오겠다는 뜻
//   return a + b;
// }

// console.log(addNum(1, 3, 7, 4));

// ---
// function addNum(...numbers) {
//   let sum = 0;

//   for (let number of numbers) {
//     // let + 변수명 / numbers 중에 number를 하나씩 가져올거임
//     sum += number;
//   }

//   return sum; // 최종적으로 값을 밖으로 꺼낼 때! 반환할 때 씀!
// }

// console.log(addNum(1, 3, 7, 4));

// ---
// function difplayFavorite(...favs) {
//   const str = `가장 좋아하는 과일은 ${favs} 입니다!`;
//   return str;
// }

// console.log(difplayFavorite("사과", "포도", "토마토"));

// --- 전개연산자 - 일반 매개변수의 앞에 절대 나올 수 없음! 뒤에 넣어야 함!
function difplayFavorite(first, ...favs) {
  const str = `가장 좋아하는 과일은 ${first} 입니다!`; // 첫번째 값만 찾아오기
  return str;
}

console.log(difplayFavorite("사과", "포도", "토마토"));
