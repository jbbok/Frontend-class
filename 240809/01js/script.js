const today = new Date();
// new는 js에서 객체로 선언되어진 ...에 쓴다
// console.log(today);

// Display Date
const displayDate = document.querySelector("#today");

const year = today.getFullYear();
const month = today.getMonth() + 1; // 0으로 나오니까 +1 꼭 해줘야 함!
const date = today.getDate();
let day = today.getDay(); // 숫자로 나옴 그래서 요일은 스위치로 변환시켜줘야함!!

switch (day) {
  case 0:
    day = "일요일";
    break; // 꼭 써줘야함
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day}</span>`;
// innerHTML 쓴 이유는 day에 스타일 주고 싶어서!

// Display Time
const displayTime = document.querySelector("#clock");

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "오전";
  if (hrs === 0) hrs = 12;
  else if (hrs > 12) {
    hrs = hrs - 12; // 12를 빼서 표기(보기 편하게)
    period = "오후";
  }
  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  // 1자리 숫자일 경우 앞에 0을 넣어주기

  displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs}`;
  // style 줄 생각 없어서 걍 innerText(모두 다 text로 인식)로~
};

setInterval(clock, 1000);
