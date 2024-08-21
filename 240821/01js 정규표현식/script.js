//
// const regexp = /\d{3}/;

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello"));
// console.log(regexp.exec("123"));

// const str = "ES2024 is powerfull";
// const regexp = /es/i;

// console.log(regexp.test(str));

// console.log(str.match(/ES2024/));

// console.log(str.match(/ES\d\d\d\d/));

// str.replace(/ES2024/, "Javascript");

// console.log(str.replace(/ES2024/, "Javascript"));

// const hello = "Hello, everyone.";

// console.log(/H/.test(hello)); // H의 위치에 상관없이 true
// console.log(/^H/.test(hello)); // H로 시작할 때 true
// console.log(/^h/i.test(hello)); // i를 붙여서 대소문자 상관없이 h로 시작할 때 true

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES2024";

// console.log(str.match(/[0-9]/g)); // 모든 숫자를 찾아오기
// console.log(str.match(/[^0-9]/g)); // 숫자를 제외하고 다 찾아와

// const str = "Oooops";

// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/));
// console.log(str.match(/o{2,4}/i)); // i를 넣으면 대문자까지 옴

// const str2 = "ES2024(ES8) is powerful";
// const regexp = /ES2024|ES8/; // | 양 옆에 빈칸은 빈 문자를 의미! 띄어쓰기 없으면 빈칸으로 두면 안됨 !! // |는 한번만 써야 함!

// console.log(regexp.test(str2));

// const regexp = /^[]+$/; <- 기본패턴

// 1) 숫자만 입력 가능한 정규표현식 패턴 (숫자라면 다 받음!)
const regexp = /^[0-9]+$/;

// 2) 양의 정수만 가능한 정규표현식 패턴 (숫자 중 양의 정수만, 0 제외)
const regexp1 = /^[1-9]\d*$/;

// 3) 음의 정수만 가능한 정규표현식 패턴 (숫자 중 음의 정수만, 0제외)
const regexp2 = /^\-[1-9]\d*$/;

// 4) 영문자만 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;

// 5) 숫자와 영문자를 모두 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+S/;

// 8) ex. 문자열의 길이가 5~10개 사이의 패턴
// const regexp7
