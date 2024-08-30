const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// console.log(h1, box);

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  // let x = e.pageX;
  // let y = e.pageY;
  x = e.pageX; // 위에 선언했으니 재할당
  y = e.pageY;

  console.log(x, y);

  h1.innerText = `X : ${x} Y : ${y}`;
  // box.xtyle.top = `${y}px`;
  // box.style.
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = `${targetY}px`;
  box.style.left = `${targetX}px`;
  console.log(targetX, targetY);

  window.requestAnimationFrame(loop); // loop를 재귀함수로 가져옴!
};

loop();
