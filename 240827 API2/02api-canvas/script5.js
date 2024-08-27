const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.scale(1, 0.8);
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "#abc51a";
ctx.fill();

// eye
ctx.beginPath();
ctx.arc(110, 100, 25, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(190, 100, 25, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.strokeStyle = "#abc51a";
ctx.fill();
ctx.stroke();

// eye-눈동자
ctx.beginPath();
ctx.arc(120, 100, 15, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 100, 15, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(115, 95, 3, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(175, 95, 3, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

// 코
ctx.beginPath();
ctx.arc(145, 120, 1, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(155, 120, 1, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "#669b3b";
ctx.fill();

// cheek
ctx.beginPath();
ctx.arc(80, 130, 15, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(220, 130, 15, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "#ffd256";
ctx.fill();

// mouth
ctx.beginPath();
ctx.arc(150, 150, 45, 0, Math.PI, false);
ctx.closePath();
ctx.strokeStyle = "orangered";
ctx.lineWidth = 3;
ctx.fillStyle = "orangered";
ctx.stroke();
ctx.fill();
