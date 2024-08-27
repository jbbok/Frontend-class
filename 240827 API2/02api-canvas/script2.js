const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 원 혹은 호! 아치
// arc(x, y, r, startAngle, endAngle, counterClockwise)
// (x축, y축, 원의 반지름, 원을 시작할 각도, 원을 끝낼 각도, true : 반시계 / false : 시계방향)

ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
ctx.closePath();

ctx.fillStyle = "pink";
ctx.strokeStyle = "gray";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 100, 50, 0, Math.PI, true);
ctx.arc(450, 100, 50, 0, Math.PI, false);
ctx.closePath();

ctx.fillStyle = "pink";
ctx.fill();

// 나 다시 시작할거야 / 새롭게 비긴패스가 나오면 호환 x 위와 단절 ㅇ
ctx.beginPath();
ctx.arc(600, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(700, 150, 50, 0, (Math.PI / 180) * 60, false);
// ctx.closePath();
ctx.strokeStyle = "rgb(200, 0, 100)";
ctx.stroke();
