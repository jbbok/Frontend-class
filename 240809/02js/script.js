// // Math 수학객체 => 함수!!

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num);
// let floorNum = Math.floor(num01); // 소수점
// let ceilNum = Math.ceil(num);
// let rndNum = Math.random() * 45; // 무작위 추첨이라 인자값 필요없음 * 45만 빼고! 많이 쓰임!
// let piNum = Math.PI;

// document.write(maxNum, "<br/>");
// document.write(minNum, "<br/>");
// document.write(roundNum, "<br/>");
// document.write(floorNum, "<br/>");
// document.write(ceilNum, "<br/>");
// document.write(rndNum, "<br/>");
// document.write(piNum, "<br/>");

// 호떡
const character = document.querySelector(".character");
// console.log(character);

let degree = 0;
// 각도가 없는 상태에서 360도 돌아야하니까 0부터 시작

const loop = () => {
  const rotation = (degree * Math.PI) / 180;
  // 도 기호를 못 써서 실수값으로 바꿔줘야해서 radian으로 바꾸는 것!
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation); //cos=밑변값
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation); //sin=높이값

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  // 복합연산자

  requestAnimationFrame(loop); // 계속 반복실행해라
  // console.log(rotation);
};

loop();
