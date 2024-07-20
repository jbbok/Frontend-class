const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
console.log("modalBox");
const close = document.querySelector("#close");
console.log(close);

btn.addEventListener("click", () => {
  // console.log("click");
  modalBox.classList.add("active");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

// 2015년도 Javascript를 만드는 기관 => Es6문법 => 화살표함수 (this객체 안 씀)
// JS문법
// function함수 (this객체 씀) + 선언+호출 위치가 중요함
// hosting => 끌어올리다!!!
