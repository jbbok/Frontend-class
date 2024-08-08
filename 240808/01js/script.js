const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   // alert("popup");
//   window.open("경로", "팝업이름", "팝업창 옵션 = 어떤 너비, 높이값을 가지게 할 것인지 / 위로 혹은 좌측으로 얼마나 떨어지게 할 것인지")
// });

btn.addEventListener("click", () => {
  window.open("./notice.html", "popup", "width=600 height=500");
  // 이벤트가 적용된 상태(클릭했을 때) 나오는 건 그냥 나옴
});
// window.open("./notice.html", "popup", "width=600 height=500");
// 웹 브라우저에서 바로 나오는건 팝업창 설정에 따라 막힘
