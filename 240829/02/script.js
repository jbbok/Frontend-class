const cursorItem = document.querySelector(".cursorItem");
// console.log(cursorItem);
const circle = cursorItem.querySelector(".circle");
// console.log(circle);
const buttonAll = document.querySelectorAll("a");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1; // 10%의 속도

// 마우스 움직임에 따라 좌표값을 찾아옴
window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // console.log(x, y);
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();

// 네 아니오에 가면 원의 크기가 줄어듬
buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
