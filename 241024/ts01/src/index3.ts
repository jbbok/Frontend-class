// type A = () => number; //슈퍼타입
// type B = () => 10; //리터럴타입 = 서브타입

// let a: A = () => 10;
// let b: B = () => 10;

// a = b; // 슈퍼타입은 서브타입 받을 수 있음 (업캐스팅)
// // b = a;  // 서브타입은 슈퍼타입 받을 수 없음 (다운캐스팅)

// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d;
// d = c;

// -----------------------------------------

// // 슈퍼타입
// type Animal = {
//   name: string;
// };

// let animalFunc = (animal: Animal): void => {
//   console.log(animal.name);
// };

// 서브타입
// type Dog = {
//   name: string;
//   color: string;
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // 다운캐스팅이 되어지는 유일한 상황
// // animalFunc = dogFunc;
// dogFunc = animalFunc;

// -----------------------------------------

// // 함수 매개변수의 값은 거의 유일하게 업캐스팅이 허용되는 상황!
// // 매개변수의 개수가 다른 경우!

// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2;
// func2 = func1;

// 함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성을 했다 => 함수 오버로딩

// const func = (a: number): void => {};
// const func = (a: number): void => {};

// 함수의 시그니처를 오버로딩 시킨 상황
// function func(a: number): void;
// function func(a: number, b: number, C: number): void;

// // 실제 함수 실행부
// function func(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

// // 함수 실행 & 호출
// func(1);
// func(1, 2);
// func(1, 2, 3);

// -----------------------------------------

// type 앞에 I붙이는 경우가 있음 (옛날 헝가리안 표기법임) 요즘은 안 씀!
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   // 타입가드로 타입을 좁혀가기
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다!" : "안짖어요!");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다!" : "안할큅니다!");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다!" : "안짖어요!");
  } else {
    console.log(animal.isScratch ? "할큅니다!" : "안할켜요!");
  }
};
