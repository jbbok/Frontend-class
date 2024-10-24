// 타입구조도
// 모든 타입 슈퍼타입 > 서브타입 (슈퍼타입은 서브타입을 수용x)
// 타입 수용 => 타입 호환성

// let num1: number = 10;
// let num2: 10 = 10;

// num1 = num2;
// num2 = num1;

// 타입스크립트에 기본적으로 내장되어있는 내장타입 > 리터럴 타입보다는 슈퍼타입임
// 서브타입 요소를 슈퍼타입 요소로 수용하는 것 (* 업캐스팅) : 대부분 허용
// 슈퍼타입 요소를 서브타입 요소로 수용하는 액션행위 (* 다운캐스팅) : 대부분 불가 / 유일하게 되는 경우가 any 뿐

// interface Animal {
//   name: string;
//   color: string;
// }

// let animal: Animal = {
//   name: "호랑이",
//   color: "white",
// };

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let dog: Dog = {
//   name: "강아지",
//   color: "white",
//   breed: "진돗개",
// };

// animal은 dog보다 슈퍼타입이다
// dog는 animal보다 서브타입이다
// animal = dog;
// dog = animal;

// interface Book {
//   name: string;
//   price: number;
// }

// let book: Book;

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook: ProgrammingBook = {
//   name: "TS",
//   price: 33000,
//   skill: "Typescript",
// };

// book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사

// let book3: Book = programmingBook;

// 대수 타입
// 복수의 타입을 합성하거나 교차한 형태의 타입을 새롭게 만든 것
// 합집합의 형태로 타입 : union 타입
// 교집합의 형태로 타입 : intersection 타입

// let a: string | number;

// a = 1;
// a = "Hello";

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: "",
// };

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4: Union1 = {
// //   name: "",
// // };

// // Intersection = Dog와 Person을 합친 것
// type Intersection = Dog & Person;

// let intersection = {
//   name: "",
//   color: "",
//   language: "",
// };

// interface Person01 {
//   name: string;
//   age: number;
// }

// // let person01: object = {};
// // let person01: Person01 = {};
// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// let dog = {
//   name: "뽀삐",
//   color: "white",
//   breed: "똥개",
// } as Dog;

// 타입 단언은 any 다음으로 치트키!
// 타입 단언을 실행시키려면 반드시 다음의 조건이 필요
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

let num4 = 10 as const;

// 타입가드 = 타입좁히기
const func = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
