const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2차 베지에 곡선
// quadraticCurveTo(cpx, cpy, x, y);
// 시작점, 움직일 점(?) (펜툴처럼)

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// // ctx.closePath();
// ctx.stroke();

// 3차 베지에 곡선
// bezierCurveTo(cl1x, cp1y, cp2x, cp2y, x, y)
// 시작점,

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.strokeStyle = "brown";
// ctx.stroke();

// new class
let triangle = new Path2D();
// triangle은 이제 스타일을 저장해둘 수 있는 인스턴스객체가 됨
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle);
ctx.fillStyle = "pink";
ctx.fill(circle);
