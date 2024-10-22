// TS 타입
// 기본 제공 타입
// number, string, boolean, object
// 기본 제공이 아닌 타입
// nuknown, any, null, undefined, void, symbol, never etc......

// number 타입
let num: number = 1;
num = 10;
//점진적 타입 시스템 -> 타입 추론 -> 타입주석을 입력하지 않아도 타입 정의!
// let num = 1; // 타입 정의 안 함
// num = 10;
// num = "10"; // 하지만 숫자로 인식해서 문자열로 넣으면 오류 뜸


// string 타입
let str: string = "Hello";
str = "World";

// boolean 타입
let bool: boolean = true;

// object 타입
let obj: object = {
  name: "BBO",
};

// -------------

// any 타입
// 다양한 종류의 타입 가운데, 치트키의 역할!
// any는 모든 타입을 수용할 수 있음!
// let sample = 0; -> number타입
let sample:any = 0; // -> any타입
sample == "Hello";

// undefined 타입
// let sample01 = undefined;
let sample01:undefined = undefined;

sample01 = undefined; // undefined만 가능! 숫자 문자 any도 아무것도 안 됨!!!!!

let sample02: unknown = 10;
sample02 = true;

// 배열 타입 // 배열의 앞에 타입 정의!
const unmArr: number[] = [1, 2, 3];
const strArr: string[] = ["BBO", "K"];
const boolArr: Array<boolean> = [true, false, true];

// union 타입 // 합친다!
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple 타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["BBO", 1],
  ["K", 2],
  ["J", 3],
  ["D", 4],
]