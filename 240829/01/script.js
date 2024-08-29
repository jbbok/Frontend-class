const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// save()
// restore()

// 1. save() & restore()를 활용한 작업
// restore가 들어오기 전까지 내용 저장save
// restore 원래 상태로 복구

// ctx.fillStyle = "pink";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// // 캔버스 위치 이동
// ctx.translate(150, 150);
// ctx.fillStyle = "palevioletred";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "hotpink";
// ctx.fillRect(50, 50, 80, 20);
// ctx.restore();
// 보관

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// 2. moveTo를 활용한 작업
ctx.fillStyle = "hotpink";
ctx.fillRect(10, 10, 100, 100);

ctx.moveTo(150, 150);

ctx.fillStyle = "#222";
ctx.fillRect(160, 160, 100, 100);

ctx.fillStyle = "pink";
ctx.fillRect(50, 50, 80, 20);
