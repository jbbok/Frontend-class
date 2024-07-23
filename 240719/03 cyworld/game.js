// 끝말잇기 게임

// 1.제시어의 끝단어 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함
// 1-2.3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함

// 2. 끝단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어가 무엇인지를 알아야 함
// 2-2. (사용자가 입력한)끝단어로 시작하는 단어와 제시어의 끝단어가 일치하는지 확인해야 함

// 3. 단어 입력 후 입력버튼
// 3-1. 입력버튼이 클릭이 되어지는 순간 두 단어를 검증 (*이벤트)

// 4. 문제 여부 판단을 하여 문제있다 || 문제 없다 판단하여 결과 도출
// 4-1. 조건에 따라서 값을 어떻게 출력해줄 것인지

// const button = document.querySelector(".search");
// // console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭!");
// });

// Word Game
const gameStart = (e) => {
  e.preventDefault();
  // // console.log("버튼클릭!");
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  // console.log(word, myword);
  let lastword = word[word.length - 1];
  // console.log(word[word.length - 1]);
  let firstword = myword[0];
  // console.log(lastword, firstword);
  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
  }
};

const button = document.querySelector(".word_text form");
// console.log(button);
button.addEventListener("submit", gameStart);

// Lotto Game

// 1부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출이 되어야 함

// 1. 클릭버튼이 무엇인지를 컴퓨터에게 알려줘야 함

// 2. 클릭버튼 클릭 시, 숫자가 생성되어야 함 (*이벤트의 대상)

// 3. JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3-1. random() => 0~1미만의 실수를 난수의 형태로 생성해 줌
// 0.99999999999999999999 * 45 이 경우에 floor() => 함수 || * 44 이 경우에 ceil() => 함수
// (*실수 : 소수점을 가지고 있는 숫자 // 없는 애 : 정수)
// (*난수 : 불규칙적으로 숫자를 생성하는 행위)
// (*소수점을 없애야 하는 필요 : floor() => 소수점을 버림 // ceil() => 소수점을 올림 // round() => 소수점을 반올림)

// 4. 중복x
// 4-1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정인데 만약에 중복되어진 값이 생성되는 경우, 1개로 합쳐주는 역할
// 4-2. 6개의 숫자 완성 => 2번째 & 4번째 숫자, 같은 경우
// 조건문 => 재추첨을 하겠습니다!

const lottoButton = document.querySelector(".wrapper_lotto_btn");
// console.log(lottoButton);
const result = document.querySelector(".game_lotto_number");
// console.log(result);

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

const startLotto = () => {
  // console.log("lotto");
  const { digitCount, maxNumber } = luckyNumber;
  // console.log(digitCount, maxNumber);
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  // console.log(myNumber);
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);
