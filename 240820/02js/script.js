const userId = document.querySelector("#userId");
// console.log(userId);
const result = document.querySelector("#result");

const userDataList = [
  { id: 123, name: "곰" },
  { id: 1021, name: "호랑이" },
  { id: 6021, name: "용" },
];

const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);

  // console.log(targetData);

  if (targetData === undefined || targetData === null) {
    result.innerText = "유저 검색 결과 없음";
  }
  result.innerText = targetData.name;
};

userId.addEventListener("keyup", (e) => {
  // console.log(e);

  // const searchId = e.target.value;
  const searchId = parseInt(e.target.value);

  // console.log(typeof searchId); // 문자로 형변환 됨 string으로 나옴

  if (isNaN(searchId)) result.innerText = "숫자가 아닙니다!";

  findUser(searchId);
});

// 어떻게 자료구조를 만들고 갈 것 인가?

// 이벤트가 시작된 이후에 어떤 값을 생성 & 처리?

// 어떻게 자료구조를 만들고 갈 것인가?

// > 문법 (*메서드 / 속성 등)
