const canvas = document.querySelector("canvas");
// console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas.getContext("2d");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(132, 168, 235)";
ctx.fillRect(50, 50, 100, 100);

// console.log(ctx);

ctx.fillStyle = "rgb(50, 0, 120)";
ctx.strokeStyle = "rgb(100, 149, 235)";

ctx.fillStyle = "rgb(83, 47, 182)";
ctx.fillRect(50, 50, 120, 120);

ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(10, 20, 200, 200);

ctx.clearRect(70, 80, 80, 45);

// canvas API 호도법...
// 각도를 계산하는 방법
// 1. 60분법 : 인간의 편의 => 원 360도 // 몇 도
// 2. 호도법 : 자연의 법칙을 통해서 발견 =>
// 부채꼴 -> 밑변 (*반지름) = 부채꼴 호의 둘레와 같다면, 무조건 해당 부채꼴 내각은 57.296도 = 1래디언
// 3.14 = 180도 = 파이
// 3래디언 = 171.888 / 180에 약간 부족(8.112만큼 부족)

// fillRect(x, y, width, height) : 사각형 요소의 색상을 채워줄 수 있도록 하는 함수

// strokeRect(x, y, width, height) : 사각형 아웃라인 선을 그려주도록 하는 함수

// clearRect(x, y, width, height) : 사각형 형태의 특정 요소만큼을 지우고자할 때 사용하는 함수

// 사각형을 만들고자 할 때 사용할 수 있는 속성

// fillStyle = "색상" : 해당 도형의 색상을 채울 때 사용할 수 있는 속성

// strokeStyle = "색상" : 해당 도형의 외곽선의 색상을 지정하고자 할 때 사용할 수 있는 속성
