// 사용자로부터 3개의 값을 받으세요
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요!"
// 위 3개의 값이 10,000원 이하라면 "예산관리 잘하셨어요!"

const traffic = Number(prompt("사용한 교통비를 알려주세요", "ex.2,000원"));
const eat = Number(prompt("사용한 식비를 알려주세요", "ex.5,000원"));git push origin “브랜치명”
const cafe = Number(prompt("사용한 음료비를 알려주세요", "ex.2,500원"));

const total = traffic + eat + cafe;

let result = total > 10000 ? "예산관리 잘해주세요!" : "예산관리 잘하셨어요!";

// result = result ? "예산관리 잘해주세요!" : "예산관리 잘하셨어요!";

alert(result);

// -------------------쌤이랑

// const traffic = Number(prompt("교통비 입력"));
// const food = Number(prompt("식대 입력"));
// const drink = Number(prompt("음료비 입력"));

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   // 위에꺼 3번 써야하니까 반복문으로 한번에 정리!
//   const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력!"));
//   arr.push(userNum);
// }

// console.log(arr);

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// const [traffic, food, drink] = arr; // 얘도 한번에 정리 가능!

// console.log(traffic, food, drink);

// const sum = traffic + food + drink;

// console.log(sum);

// if (isNaN(sum) || sum === 0) {
//   //isNaN 안에 들어온 값이 숫자가 아니라면
//   alert("잘못입력했습니다!");
// } else if (sum <= 10000) {
//   alert("예산관리 잘하셨습니다!");
// } else {
//   alert("예산관리 잘하세요!");
// }
