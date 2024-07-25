const output = document.querySelector("#output");
// console.log(output);

const arr = [2, 1, 3, 10];

// forEach & for & for of 함수

// arr.sort((a, b) => {
//   // a,b 는 계속 모든 숫자를 비교할거임
//   if (a > b) {
//     return 1; // 뒤로 감 2,1 -> 1,2
//   }
//   if (a === b) {
//     return 0; // 움직임 없음
//   }
//   if (a < b) {
//     return -1; // 앞으로 감 2,3 -> 2,3 그대루 / 3,2 -> 2,3
//   }
// });

// 오름차순
// arr.sort((a, b) => {
//   return a - b; // return은 반환값 (새로운 값으로 반환해야할 때)
// });

// 내림차순
arr.sort((a, b) => {
  return b - a;
});

arr.sort((a, b) => b - a);

// const arr1 = arr.map((item) => item * 2);

output.innerText = arr;
