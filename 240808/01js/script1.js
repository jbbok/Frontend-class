// const today = new Date();
// const month = today.getMonth() + 1; //객체가 가지고 있는 함수를 씀(메서드 함수)
// const date = today.getDate();
// const day = today.getDay();

// console.log(today);
// console.log(month);
// // 다른 값들은 1부터 시작하는데 월만 0부터 찾아오기 때문에 8월이지만 7이 나옴, 그래서 +1 해줘야함
// console.log(date);
// console.log(day);

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`);
// document.write(`현재 일 : ${date} 일`);

// 밀리초 변환 개념
// 초 / 분 / 시
// 1초 = 1000밀리초
// 1분 = 60초 = 60*1000 = 60,000밀리초
// 1시간 = 60분 = 3600초 = 60*60*1000 = 3,600,000밀리초
// 1일 = 24시간 = 24*60*60*1000 = 86,400,000밀리초

const today = new Date();
const year = today.getFullYear(); // 년도는 이거임

const lastDate = new Date(year, 11, 31);
const diffDate = lastDate - today;

// const result = diffDate / (24 * 60 * 60 * 1000);
const result = Math.round(diffDate / (24 * 60 * 60 * 1000));

console.log(year);
console.log(lastDate);
console.log(diffDate);
console.log(result);
console.log = Math.round(diffDate / (24 * 60 * 60 * 1000));
alert(`을 연말 마지막 날까지 ${result}일 남았습니다.`);
