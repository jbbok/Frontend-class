// document.querySelector("p").addEventListener("click", console.log("p"));
// p가 콜백함수로 들어와있지 않아서 에드이벤트리스너가 제어할 수 없음
document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});
// p가 콜백함수로 들어서 에드이벤트리스너가 클릭했을 때 뜨게 함!

document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// 웹 브라우저가 실행 => html, js 피싱 (*문서 읽으면서, 기본적으로 실행될 수 있는 요소 실행)

// function testFuc() {
//   alert("시작");
// }

// testFuc();

const elements = document.querySelectorAll("*");
// console.log(elements);
elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
});
