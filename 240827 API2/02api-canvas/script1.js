const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 사각형 형태의 도형을 만들 때에는 속성 정의를 먼저!
// 색상, 외곽선 등등을 정한 후 => 해당 도형을 그림!

// 하지만 삼각형을 만들 때는
// beginPath() : 도형을 그릴 거야! 라고 정의해줘야 함 / 도형! 드로잉 선언!
// 경로 그림
// moveTo(x, y)위치 좌표값을 세팅하거나 이동하고자 할 때
// lineTo(x, y) : 직선 경로
// stroke() : 실제 경로가 그려지도록 하는 함수
// fill() : 해당 경로 사이에 채색 함수
// closePath() : 어떤 도형을 그릴 것인가에 대한 경로 드로잉 종료 선언
// 그 후에 외곽선을 페인팅 & 내부 채색

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();
// ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgb(250, 100, 150)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgb(250, 100, 150)";
ctx.fill();
