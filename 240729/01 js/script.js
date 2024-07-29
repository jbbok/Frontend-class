const test1 = "mon"; //값을 할당

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

const num = 1000;
const str = "원";
const counter = num + str;
console.log(typeof counter);

const num1 = 1000;
const str1 = "2000";

const counter1 = num + str1;
consolelog(counter1);

prompt("얼마를 원하세요?");
