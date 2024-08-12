const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
// const today = new Date("2002", "1", "1"); // 월에 +1을 해서 가져옴 (이렇게 넣을 땐 월에 -1 해줘야 함!)
// const today = new Date("2002-01-01"); //값을 따로 입력하지 않으면 오늘 날짜 찾아옴
//"2002-01-01" 이런 문자 형식으로 넣어도 찾아옴
// 년, 월, 일로 쪼개서 넣어도 찾아옴 (이렇게 넣을 땐 월에 -1 해줘야 함!)
// console.log(today);

// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth() + 1;
// const currentDate = today.getDate();

// current.innerText = `🙋🏻‍♀️ 오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다!`;
current.innerText = `🙋🏻‍♀️ 오늘은 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 입니다!`;

// console.log(birthYear, birthMonth, birthDate, form);
// console.log(current);
// console.log(currentYear, currentMonth, currentDate);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click");
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  const resultDays = document.querySelector("#days");
  // console.log(resultDays);
  const resultHours = document.querySelector("#hours");

  // console.log(birthDay);
  const passed = today.getTime() - birthDay.getTime();
  // console.log(passed);
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  // console.log(passedDays);
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365); // round : 반올림

  // 1초 = 1000밀리초
  // 1분 = 60초 = (60초 * 1000밀리초)
  // 1시간 = 60분 = 3600초 = (60분 * 60초 * 1000밀리초)
  // 1일 = 24시간 = (24시간 * 60분 * 60초 * 1000밀리초)

  resultDays.innerText = `🤗 현재 나이는 ${passedAges}세 입니다!`;
  resultHours.innerText = `😮 현재까지 ${passedHours}의 시간이 흘렀습니다!`;
});
