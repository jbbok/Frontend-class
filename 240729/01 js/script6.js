// 사용자에게 숫자 1개를 받습니다
// 해당 숫자가 짝수인지 홀수인지 확인하여, 짝수라면 알림창에 "짝수" 출력!
// 만약 홀수라면 알림창에 "홀수"출력!
// 짝수는 반드시 2로 나누어 떨어집니다.
// 홀수는 2로 나눴을 때 반드시 나머지가 존재합니다!
// 단, 사용자가 취소 버튼을 클릭할 수 있다는 것을 감안하여 예외조항처리를 반드시 해주세요!

// const number = Number(prompt("숫자를 입력해주세요"));

// // 사용자에게 숫자 입력을 받음
// let userInput = prompt("숫자를 입력하세요:");

// // 입력이 취소되었거나 빈 문자열인 경우 예외 처리
// if (userInput === null || userInput === "") {
//   alert("입력이 취소되었습니다.");
// } else {
//   // 입력 값을 숫자로 변환
//   let number = parseInt(userInput, 10);

//   // 변환된 값이 숫자인지 확인
//   if (isNaN(number)) {
//     alert("유효한 숫자를 입력하세요.");
//   } else {
//     // 삼항 조건 연산자를 사용하여 짝수인지 홀수인지 확인 후 알림창에 출력
//     let result = (number % 2 === 0) ? "짝수" : "홀수";
//     alert(result);
//   }
// }

// -------------------------쌤이랑

let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== null) {
  userNumber = parseInt(userNumber); //정수로 바꿀거임
  // number쓰지 않는 이유 / null값의 경우는 ?
  userNumber % 2 === 0
    ? alert(`${usernumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}
