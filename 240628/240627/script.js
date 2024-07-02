// 1.웹 브라우저에게 클릭할 이벤트 대상을 알려준다
// querySelsctor()
// addEventListener()

//  2.클릭을 했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다
// classList
// add() || remove()
// button => 기본속성을 무력화하는 방해요소가 필요
// preventDefault()

// 2-1.가상클래스 = filledA & filledB

// const femaleBtn = document.querySelector(#femalebtn)
const femaleBtn = document.getElementById("femalebtn");
// .getElementById("femalebtn"); 얜 id값만 찾아댕기는 애
// console.log(femaleBtn);
const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  // femaleBtn.querySelector("i").classList.add("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  // maleBtn.querySelector("i").classList.add("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
