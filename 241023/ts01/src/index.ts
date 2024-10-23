// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "world"];
// const boolArr: Array<boolean> = [true, false, true];

// // union
// let multiArr: (number | string)[] = [1, "hello"];

// // 중첩배열
// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ];

// // 튜플?타입
// let tup1: [number, number] = [1, 2];
// // tup1 = [1, 2, 3]; // 오류남
// tup1.push(5); // 오류 안 남

// -----------------------------------------------------------

// TS
// 객체 & 함수 타입 정의

// const user: object = {
//   id: 1,
//   name: "BBO",
// };

// const user: {
//   id?: number;
//   name: string;
// } = {
//   name: "BBO",
// };

// // const result = user.id;

// // 구조적 타입 시스템을 적용!
// // 점진적 타입 시스템
// // 선택적 타입 적용

// let config: {
//   readonly apikey: string;
//   // readonly :  값을 변경할 수 없음
// } = {
//   apiKey: "123456789",
// };

// // config.apikey = "Hacked";

// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1 = {
//   id: 1,
//   name: "BBO",
//   location: "Seoul",
// };
// let user2 = {
//   id: 2,
//   name: "K",
//   location: "InCheon",
// };

// type User = {};
// // 전역에서 타입 별칭은 중복선언 불가
// const fnc = () => {
//   type User = {};
// };
// // 전역이 아닌 지역에서는 재선언 가능!

// // ------------------------------------------

// // 인덱스 시그니처
// //  > 타입별칭으로 어떤 타입을 정의 -> 하위 요소의 모든 타입의 형태가 동일한 경우

// type CountryCodes = {
//   [key: string]: string;
// };

// const countryCodes = {
//   Korea: "Ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };

// // 최우선의 방법 추천 x
// // 객체의 타입 : interface 타입 (앞에 interface를 붙임)

// interface User01 {
//   id: number;
// }

// implements // extends

// interface Person {
//   name: string;
//   age: number;
//   etc: boolean;
// }

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// const person02: Person = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };

// class Person1 {
//   name: string;
//   age: number;
// }

// const pereson03 = new Person1();
// pereson03.name = "J";
// pereson03.age = 20;

// console.log(person03);

// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// ------------------------------------------

// 접근제어자
// class Person2 {
//   constructor(public name: string, public age: number) {}
// }

// const person04 = new Person2("J", 20);
// console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }

// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("J", 20);
// console.log(person05);

// ------------------------------------------

// 추상클래스
// 추상화
// 형태가 없는 비정형화된 사물을 표현하는 것
// 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성

// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("B", 20);
// console.log(person06);

// ------------------------------------------

// // static 속성

// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;
// console.log(test01A);

// ------------------------------------------

// Enum → Enumerable :  열거형 타입

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "B",
//   role: Role.ADMIN,
//   id: 0,
// };
// const user2 = {
//   name: "K",
//   role: Role.USER,
//   id: 1,
// };
// const user3 = {
//   name: "J",
//   role: Role.GUEST,
//   id: 2,
// };

// console.log(user1, user2, user3);

// ------------------------------------------

// 리터럴 타입 : 문자열을 통해서 타입을 지정하겠다
// any

// let test01 = 10; // 숫자로 인식
// test01 = "Hello"; // 문자라서 오류 뜸

// let test01: any = 10; // any 붙이면 오류 안 뜸
// test01 = "Hello";

// let test02: unknown;

// test02 = "World";
// test02 = 1; // 숫자
// test02 = () => {}; // 함수 다 돼~

// let test03 = test01;

// let test04: number = 20;

// // 타입 제한 적용
// if(typeof test02 === "number") {
//   test04 = test02;
// }

// ------------------------------------------

// const func1 = (): string => {
//   return "hello";
// };

// // void 함수의 반환값이 존재하지 않는 경우
// const func2 = (): void => {
//   console.log("world");
// };

// let test05: void;

// // test05 = 1;
// // test05 = "Hello";
// // test05 = true;

// test05 = undefined;

// let test06: never;

// // test06 = 1;
// // test06 = "Hello";
// // test06 = true;
// // test06 = undefined;
// // test06 = any;
// // test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

// ------------------------------------------

// let obj: object = {
//   name: "B",
// };

// interface Nameable {
//   name: string;
// }

// // 타입 단언 (아래 두개 다 같음)
// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

// ------------------------------------------

const add = (a: number, b: number): number => {
  return a + b;
};

// 함수 시그니처
// const printMe = (name: string, age: number): void = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };

// 타입 별칭
// type PrintMeFnc = (name: string, age: number) => void;

// // 함수 시그니처
// const printMe: PrintMeFnc = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };

// interface Nameable02 {
//   name: string;
// }

// // 타입 가드를 설정했다
// // const getName = (o: Nameable02) => {
// //   return o != undefined ? o.name : "Loading...";
// // };

// // const dataResult = getName(undefined);

// // console.log(dataResult);
// // console.log(getName({ name: "B" }));

// // union 타입
// const getName = (o: Nameable02 | undefined.) => {
//   return o.name;
// };
