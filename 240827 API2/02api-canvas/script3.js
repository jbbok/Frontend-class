const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// rect() => 사각형
// 사각형, 원
// arc()
// ellipse()

// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, couterClock)
// (x축, y축, 가로의 반지름, 세로의 반지름, 타원에 대해 어떤 점으로 회전을 할거냐, 원을 시작할 각도, 원을 끝낼 각도, true : 반시계 / false : 시계방향)

ctx.beginPath();
ctx.ellipse(200, 150, 80, 50, 0, 0, Math.PI * 2);
ctx.closePath();
ctx.strokeStyle = "rgb(250, 0, 100)";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(150, 250, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
ctx.closePath();
ctx.strokeStyle = "#666";
ctx.stroke();

ctx.scale(1, 0.7); // (100%, 70%) // 항상 시작하기 전에 넣어주기1!!!!
ctx.beginPath();
ctx.arc(400, 200, 80, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(600, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();
