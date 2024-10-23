// const calc = (value: number, cb: (arg: number) => void): void => {
//   let add = (a: number, b: number) => a + b;
//   let multiply = (a: number, b: number) => a * b;

//   let result = multiply(add(1, 2), value);
//   cb(result);
// };

// calc(30, (result: number) => console.log(`result is ${result}`));

// 고차 함수

// (arg0: number) => number) // 이 부분이 1차 함수 시그니처

// const add =
//   (a: number): ((arg0: number) => number) =>
//   (b: number) =>
//     a + b;

// const result = add(1)(2);

// console.log(result);

// 함수 시그니처로 바꿔보기
// type NumberToNumber = (arg0: number) => number;

// const add = (a: number): NumberToNumber => {
//   const _add = (b: number): number => {
//     return a + b;
//   };
//   return _add;
// };

// const result = add(1)(2);

// console.log(result);

// 모나드 함수
// 파이프 함수
// 커리 함수
// 람다 함수
