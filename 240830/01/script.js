const contentAll = document.querySelectorAll(".contWrap img");
// console.log(contentAll);
const shadow = contentAll[0];
const human = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  // console.log(e.pageX - window.innerWidth / 2); // 중간을 기준으로 음수 양수 나눠짐
});

const loop = () => {
  targetX += (x - targetX) * speed;

  // shadow.style.transform = `translateX(${targetX}px)`;
  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 20}px)`;
  textImg.style.transform = `translateX(${-targetX / 10}px)`;

  window.requestAnimationFrame(loop);
};

loop();
