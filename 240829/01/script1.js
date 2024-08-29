const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 사각형 마름모 만들고 이동
// ctx.fillStyle = "pink";
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150);
// // 캔버스에서 모든 각도는 레디얼
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

ctx.save();
// scale은 배율 -> 좌표값에도 영향을 미침
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
ctx.restore();

ctx.strokeRect(200, 50, 100, 50);
