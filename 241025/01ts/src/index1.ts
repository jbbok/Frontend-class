// 타입별칭! + 인덱스타입 + 제네릭

type Map2<T> = {
  // [key: string]: string; // 문자를 조건으로 주면 숫자일 때 못 씀
  [key: string]: T; //타입별칭으로 바꿔줘야 함
};

const stringMap2: Map2<string> = {
  name: "BK",
  nickName: "B",
};

const stringMap3: Map2<number> = {
  age: 20,
  birthYear: 2002,
};

// ------------------------------------------
// 제니릭 + 인터페이스 조합

interface keyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: keyPair<string, number> = {
  key: "key",
  value: 0,
};

const keyPair2: keyPair<boolean, string[]> = {
  key: true, // boolean값
  value: ["1"], // 배열
};
