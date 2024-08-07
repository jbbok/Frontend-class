//  JS 현시점의 날짜 정보 데이터를 생성해주는 함수
// 년, 월, 일, 시, 분, 초 모든 정보를 알려줌

const today = new Date();
const hrs = today.getHours();
// console.log(today.getHours());

const container = document.querySelector(".container");
const newImg = document.createElement("img");

newImg.src = hrs < 12 ? "./img/morning.jpg" : "./img/afternoon.jpg";

container.appendChild(newImg);
