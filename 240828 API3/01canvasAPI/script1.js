// const canvas = document.querySelector("canvas");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// const ctx = canvas.getContext("2d");
// // console.log(ctx);

// const img = new Image();

// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// // });
// img.onload = function () {
//   // ctx.drawImage(img, 0, 0, 300, 200);
//   // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//특정 이미지를 가져와서 원하는 사이즈만큼 캡처한 후 원하는 위치에 해당 이미지를 출력!
// (이미지, 캡처하고자 하는 x 좌표, 캡처하고자 하는 y좌표, 너비, 높이, 출력하고자 하는 x좌표, 출력하고자 하는 y좌표, 너비, 높이)
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };

// img.src = "./img/cat.jpg";

// ---------------------

const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "./img/bird.jpg";

ctx.beginPath;
ctx.arc(300, 200, 150, 0, Math.PI * 2, false);
ctx.clip();
