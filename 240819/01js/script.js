const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// console.log(origin, result);

let numbers = [2, 4, 6, 8, 10];

let sum = 0;
// 빈 공간의 변수가 대부분 필요

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  // 빈 변수에 값을 추가
}

// 배열의 값을 length를 통해서 꺼내올 수 있다

// 선언부와 호출부 순서를 잘 지켜줘야 함!

const showArray = (area, arr) => {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += `<td>${arr[i]}</td>`;
  }
  str += "</tr></table>";
  area.innerHTML = str;
};

showArray(origin, numbers);

numbers.push(sum);
showArray(result, numbers);
