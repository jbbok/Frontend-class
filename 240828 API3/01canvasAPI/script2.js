const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
// console.log(ctx);

ctx.globalAlpha = 0.3;
ctx.fillStyle = "pink";
ctx.fillRect(50, 50, 100, 50);

ctx.fillStyle = "rgb(108, 197, 238)";
ctx.fillRect(150, 50, 100, 50);

ctx.fillStyle = "rgb(174, 205, 90)";
ctx.fillRect(250, 50, 100, 50);

ctx.fillStyle = "rgb(255, 214, 29)";
ctx.fillRect(350, 50, 100, 50);

// -----------

ctx.fillStyle = "pink";
ctx.fillRect(50, 150, 100, 50);

ctx.fillStyle = "rgba(108, 197, 238, 0.7)";
ctx.fillRect(150, 150, 100, 50);

ctx.fillStyle = "rgba(174, 205, 90, 0.7)";
ctx.fillRect(250, 150, 100, 50);

ctx.fillStyle = "rgba(255, 214, 29, 0.7)";
ctx.fillRect(350, 150, 100, 50);
