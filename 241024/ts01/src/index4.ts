// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "B",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "K",
//   age: 20,
// };

// type Type1 = number | string;
// type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | Person;

// const person: Type3 = {
//   name: "B",
//   age: 20,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

type Animal = {
  name: string;
  age: number;
};

// Animal을 기준으로 위처럼 중복된 코드를 쓰지 않고 확장적으로 쓰는 것
interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// interface 다중확장
interface DogCat extends Dog, Cat {
  breed: string;
}

const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
