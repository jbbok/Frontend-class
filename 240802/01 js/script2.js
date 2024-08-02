// const main = window.document.querySelector("main"); // tag는 그냥 씀
// console.log(main);
// const profile = main.querySelector("main > #profile");
// console.log(profile);
// const profile = document.getElementById("profile");
// console.log(profile);

// querySelector => 전역요소의 모든 Node
// DOM > id
// getElementById => 메모리의 효율성 극대화! => 그래서 빠름
// 객체 속성을 반드시 document로 지정하고 가야한다

// const h1 = main.querySelector("h1");
// console.log(h1);
// const desc = document.querySelector("#desc"); // id는 #붙임
// console.log(desc);
// const user = desc.querySelectorAll(".user");
// console.log(user[0]);
// console.log([user.length - 1]);
// 유사배열
// 99% 배열이 가지고 있는 속성!
// 유사 배열은 배열과 다른 1%

// const img = document.getElementsByClassName("image");
// console.log(img);
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// user.addEventListner("click", () => {
//   console.log("click");
// }); // <- 이렇게 쓰면 안됨!!!

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   })
// })

// ---------------------------

// const desc = document.querySelector("#desc");
// const desc = document.querySelector("#desc");
// console.log(desc.innerHTML);
// console.log(desc.textContent);
// const kj = desc.querySelectorAll(".user")[0].innerText;
// const kj = desc.querySelectorAll(".user")[0]; // 안써두 찾아옴
// console.log(kj);

const title = document.querySelector("#title");
// console.log(title);
// title.addEventListener("click", () => {
//   title.innerText = "나의 프로필";
// });
// title은 객체가 됨 / 뒤에 함수가 붙음
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});

const pfimg = document.querySelector("#profile img");
// console.log(pfimg.src);
pfimg.addEventListener("click", function () {
  this.src = "./dom/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
// console.log(firstP);
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>이승환</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");

secondP.addEventListener("click", function () {
  // // this.classList.add("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
