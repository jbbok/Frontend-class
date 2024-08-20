const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 = ["css", "Javascript", "React"];
const member3 = ["Javascript", "React"];

// 하나의 배열로 만들어서 나오게 할 예정 => 전개연산자 구문 써야함
const subjects = [...member1, ...member2, ...member3];
// console.log(subjects);

const resultList = new Set();
// set 인스턴스 객체. 자료구조 / 프로토타입 함수를 씀 / resultList는 비어있음 / add 메서드 사용 / 중복되는 과목 한번만!

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);
// 형태는 배열과 흡사하나 배열이 아님! 유사한 순서를 갖고 있으나 length못 씀!
// => 전개연산자 활용해서 배열로 바꿔줘야 함!

// fuctuon()함수를 쓰면 문제가 잘 안일어남 / 필요한 상황에서~ 무조건 배제 x

result.innerHTML = `
  <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`;
// for문 못 씀 (문을 쓸 수 없음 + 표현식만 가능(삼항조건연산자 등)
// 표현식문 vs 실행문
// JSX = Javascript And Xml