// const test1 = "mon"; //값을 할당

// const test1 = "tue"; //재선언 -> 에러남
// const test2 = "tue"; //2라고 다른 이름으로 선언해야함

// 프로그램을 개발하는 데 있어서
// - width 1920px 이 조건에
// - 슬라이드 개수 5개 고정 이 조건일 땐
// 값이 바뀌지 않으면 const 쓰면 됨! (재선언 재할당 불가)

// 스크롤 내리게 되었을 때, 내려간 값에 따라서 뭔가를 변경해야할 때
// let을 쓰면 됨! (재선언은 불가하나 재할당은 가능)

// let test2 = "mon";

// // let test2 = "tue"; 재선언 -> 에러남

// test2 = "tue"; // 재할당 가능함

// A
// -특정 카테고리 안에 있는 상품개수를 10개로 수정할거야!
// var category = 10;

// B
// 장바구니에 담긴 상품개수
// var category = 8;

// 병합시에 에러메세지 안 뜸 but 상황에 따라 10이나 8을 맘ㄷㅐ루 가져옴 그니까 사용 지양

// const x = 10;
// const y = 20;
// const z = x + y;
// console.log(z); = 30

// const x = 10;
// const z = x + y;
// const y = 20;
// console.log(z); = 30 이러면 순서 안 맞아서 못 찾음

// var x = 10;
// var z = x + y;
// var y = 20; / 순서가 안 맞지만 y를 끌어올려 계산함
// console.log(z);
// Not a Number -> 자료의 형태 중 하나

// warpper
// const warpper = document.querySelector("#wrapper");
// console.log(wrapper);

// 자료형
// 숫자형
// const num1 = 1;
// const num2 = 2;

// const sum = num1 + num2;
// console.log(sum);

// console.log(typeof sum);

// 문자열
// const str1 = "1"; // 따옴표안에 있으니 1은 숫자 아니고 문자임
// const str1 = "1";
// const str1 = "2";

// console.log(typeof str1);

// const num = 1000;
// const str = "원";
// const counter = num + str;
// console.log(typeof counter);

// const num1 = 1000;
// const str1 = "2000";

// const counter1 = num + str1;
// // consolelog(counter1);

// prompt("얼마를 원하세요?");

// 240730 논리형부터~

// const boolean = false;
// console.log(typeof boolean);

// const test01 = null;
// // null -> 유효하지 않은 값
// const test02 = undefined;
// undefined -> 미정값 (아무것도 없는게 값임)

// const name = "서강준";

// const classroom = "901";

// // console.log(name + "님", classroom + "호 강의실로 오세요!"); 옛날
// console.log(`${name}님 ${classroom}호 강의실로 오세요!`); //지금

// const jsBook = {
//   // 속성 : property
//   // key : value
//   title: "지옥에서 온 깃허브",
//   pages: 330,
// };
// // 이것이 객체
// // 객체안에 담긴 값을 찾아올 수 있음

// //온점 표기법
// const jsBookTitle = jsBook.title;
// console.log(jsBookTitle);

// //대괄호 표기법
// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// jsBook.title = "천국에서 온 깃허브";
// console.log(jsBook);
// // = 할당연산자 (위에 지옥에서~ 라고 값을 할당햇는데 천국에서~ 로 재할당 함 키값을 가져와서 넣다 뺏다 가능함 이것이 바로 객체임)

// json => javascript object notation

// const arr = ["red", "green", "blue"];
// console.log(typeof arr);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// let test01 = Symbol();
// let test02 = Symbol();

// console.log(test01 === test02);

// let id = Symbol("userId");

// const member = {
//   name: "David",
//   [id]: 12345,
// };
// console.log(member);
// console.log(member[id]);

// const fncTest = function () {
//   consolelog("click");
// }; //function 함수

// const fncTest = function () {
//   consolelog("click");
// }; //화살표함수

// 자료변환
// let a = 10;
// let b = a;
// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// // const favorite = fruits;
// const favorite = [...fruits]; //전개연산자 구문

// favorite[1] = "grape";

// console.log(fruits);

// 형변환(형태변환)
// const one = "20";
// const two = 10;

// const sum = one + two;

// 1) 의도적으로 숫자의 형태로 변환
// // Number()
// console.log(typeof Number("20"));

// console.log(Number(true)); // 값이 1
// console.log(Number(false)); // 값이 0
// // 그래서 스위치로 잘 씀

// console.log(Number("Hi")); // 값이 NaN 넘버가 아님

// // parselnt()
// console.log(parseInt("36.4")); // 소수점 떼버림

// // parseFloat()
// console.log(parseInt("36.4")); // 소수점 있음

// // 2) 의도적으로 문자의 형태로 변환
// // String() :
// const num = 10;
// console.log(num.toString());
// console.log(typeof num.toString());

// console.log(toString(num));

// // toString() :
// const num = null;
// console.log(typeof String(num));

// 3) 의도적으로 논리값으로 형태를 변환
// Boolean() :
console.log(Boolean("Hi")); //true

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false

const json = " test.json";
if (json) {
}

prompt("자연수를 입력해주세요!");
const number = prompt("자연수를 입력해주세요!");

console.log(number);
