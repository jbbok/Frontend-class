const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// console.log(origin, result);

// 배열 선언
let numbers = [2, 4, 6, 8, 10];

// 변수 선언 (여기서 arr=참조변수)
const tail = (arr) => {
  return arr.length > 1 ? arr.slice(1) : arr;
};

origin.innerText = numbers;
result.innerText = tail(numbers); // 배열이 인자값

// 매개변수 : 함수를 선언할 때, 인자값으로 들어오는 값의 위치에 선언해주는 변수를 지칭할 때
// 참조변수 :
// 인자값 : 함수를 호출할 때, 입력하는 값
