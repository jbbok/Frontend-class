const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
// console.log(ctx);

// 선의 굵기 && 선의 끝부분 처리
// lineWidth = "" -> 선의 굵기를 정의
// lineCap = butt(*기본값, 너비값 끝나면 그냥 잘라버림) / round(끝을 둥그랗게 감싸않음,  끝에 전체라인 위드값 절반을 가져가서 길어짐) / square(해당 라인의 너비에 절반 정도 되어지는 해당 길이의 사각형을 양 옆에 붙여서 길어짐)

// const lineCap = ["butt", "round", "square"];

// for (let i = 0; i < lineCap.length; i++) {
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.stroke();
// }

// 선이 교차하는 지점에서의 효과 처리
// bevel / miter / round

const lindJoin = ["bavel", "miter", "round"];
for (let i = 0; i < lindJoin.length; i++) {
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.stroke();
}
