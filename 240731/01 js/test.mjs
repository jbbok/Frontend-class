// 1. 사용자로부터 태어난 년도를 받으세요.
// 2. 태어난 연도를 기준으로 나이가 몇 살인지 #result 공간에 출력해주세요.
// 3. innerText 속성을 활용하시면, 특정 Node안에 텍스트 문장을 삽입할 수 있습니다

// const birth = Number(prompt("태어난 년도를 입력해주세요"));

// const age = 2024 - birth;

// let result = age;

// alert(당신의 나이는 ${age}입니다.)

// -------------------쌤이랑

const button = document.querySelector("button");
const calc = () => {
  // console.log("click");
  const birthYear = Number(prompt("태어난 년도를 입력하세요", "2002"));
  const currentYear = 2024;
  const age = currentYear - birthYear + 1;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다!`;
};

button.addEventListener("click", calc);
