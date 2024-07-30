// 사용자의 몸무게가 적정체중인가?
// 적장체중 = (본인의 키 - 100) * 0.9 => 오차범위 5

const name = prompt("이름을 말씀해주세요!", "ex.서강준");
const height = parseFloat(prompt("키가 어떻게 되시나요?", "182.6"));
const weight = parseFloat(prompt("몸무게를 말씀해주세요", "ex. 70.7"));

const normalWeight = (height - 100) * 0.9;
// const result = weight >= normalWeight - 5 && weight <= normalWeight + 5; //비교연산자
// result 값을 재할당 해줄 거임 그래서 let으로 변경
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5; //비교연산자

// 조건식을 굉장히 쉽고, 간편하게 사용할 수 있는 3항 조건 연산자!
// 기준점이 되는 항(기준값) ? "(true일 경우의 값)" : "(false일 경우의 값)"
result = result ? "적정체중입니다!" : "적정체중이 아닙니다!";

alert(`${name}님은 ${result}`);
