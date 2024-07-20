// mouseover & nouseout 기능 구현
// 부모도 같이 증가

const outerElement1 = document.querySelector(".out.overout");
let outerCount1 = 0;
outerElement1.addEventListener("mouseover", () => {
  const pElements = outerElement1.querySelectorAll("p");
  // console.log(pElements);
  if (pElements.length > 0) {
    pElements[0].innerText = `Outer Box over: ${outerCount1++}`;
  }
});

const innerElement1 = document.querySelector(".in.overout");
// console.log(outerElement1, innerElement1);
let innerElement1 = 0;
innerElement1.addEventListener("mouseover", () => {
  const pElements = innerElement1.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Inner Box Over: ${outerCount1++}`;
  }
});

// mouseover & nouseout 기능 구현

const outerElement2 = document.querySelector(".out.enterout");
let outerCount2 = 0;
outerElement2.addEventListener("mouseenter", () => {
  const pElements = outerElement2.querySelectorAll("p");
  // console.log(pElements);
  if (pElements.length > 0) {
    pElements[0].innerText = `Outer Box over: ${outerCount2++}`;
  }
});

innerElement2.addEventListener("mouseenter", () => {
  const pElements = innerElement2.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Inner Box over : ${outerCount2++}`;
  }
});
