// setInterval : 특정 시간에 맞춰서 무언가 반복적으로 자동 실행하도록 해주고 싶을 때
// function greeting() {
//   console.log("안녕하세요!");
// }

// setInterval(greeting, 2000);

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// ---
// clearInterval : setInterval()를 통해서 반복실행되고 있는 해당 함수를 정지시켜줄 수 있는 단짝 친구

// function greeting() {
//   console.log("안녕하세요!");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);

// setInterval + clearInterval
// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// 재귀함수 호출
// let num = 0;

// const testFnc = () => {
//   num++;
//   document.write(num, "<br/>");
//   if (num === 10) return; // 종결시킴 / 보이지않는 무의 반환값이 있음!
//   testFnc();
// };

// testFnc();

// return => 문장종결
// return 값
// 함수가 어떤 연산작업 => 값을 반환!!
// 연산 작업이 완료x => 반환!

// ---
// setTimeout : 특정 시간 이후에 실행시키고자 할 때
setTimeout(() => {
  console.log("3초가 지났습니다!");
}, 3000);
