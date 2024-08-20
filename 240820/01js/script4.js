const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  // 제너레이터 함수를 만듦!
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이촌";
  yield "세종대왕릉";
  yield "여주";
}

const gyeonggang = train();
// 이터러블한 객체가 될 수 있는 인스턴스 객체가 됨

button.addEventListener("click", () => {
  // console.log("click");
  let current = gyeonggang.next();

  if (current.done !== true) result.innerText = current.value;
  else {
    result.innerText = "종점입니다!";
    button.setAttribute("disabled", "disabled");
  }
});
