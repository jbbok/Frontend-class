// const str = "hello Sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// console.log(arr.length);

// 1) 특정 위치의 문자에 접근하고자 할 때 -> charAt(위치)
// str.charAt(4);
// console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) count += 1;
//   }
//   return count;
// };

// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고 싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`
// );

//  2) indexOf() : 특정문자열을 인자값으로 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아오게 하는 역할

// const str1 = "Good morning, everyone. Beautiful morning.";
// console.log(str1.indexOf("morning"));
// // console.log(str1.indexOf("evening"));

// let firstIndex = str1.indexOf("morning");
// console.log(str1.indexOf("morning", firstIndex + 1));

// const str = "Hello YDH";
// const arr = ["today", "first", "theday"];
// console.log(str.length, arr.length);
//특정 위치의 문자에 접근하고자 할때, charAt()
// console.log(str.charAt(5));
// const counting = (string, word) => {
//   let cnt = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) cnt += 1;
//   }
//   return cnt;
// };
// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고 싶은 문자열은 무엇인가요?");
// const result = counting(string, word);
// document.write(`${string}에는 ${word}이(가) ${result}개 있습니다.`);
//indexOf : 특정 문자열을 인자값으로 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아옴
// const str1 =
//   "Good morning, everyone! Beautiful morning init? Have a nice morning";
// let firstIdx = str1.indexOf("morning");
//6번째 이후로 나오는 값을 찾아와라
// let secondIdx = str1.indexOf("morning", firstIdx + 1);
// console.log(str1.indexOf("evening"));
// console.log(str1.indexOf("morning", secondIdx + 1));
//특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있는지 확인하는 함수 startsWith(), endsWith(),includes()
// 상기의 해당 조건에 부합하는지 여부 체크할 때 주로 사용!
// 조건에 부합하면 true // false

// const str2 = "Hello, everyone";
// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("He"));
// console.log(str2.startsWith("Hello,ev"));

// console.log(str2.startsWith("el", 1));
// console.log(str2.startsWith("o", 4));

// console.log(str2.endsWith("everyone."));
// console.log(str2.endsWith("Everyone."));
// console.log(str2.endsWith("one."));

// ES6 이전문법
// console.log(str2.indexOf("every") === 5);
// console.log(str2.includes("every"));

// let str3 = " ab cd ef ";

// console.log(str3.trim());
// trim 앞과 뒤의 모든 공백(여백)을 없애버림
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// 회원가입 휴대폰 번호 입력방식

// const str2 = "Hello, everyone";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// 문자열에서 특정 문자를 추출하는 방법!
// 사용자가 올바르지 않은 정보값을 입력했을 때!
// const str2 = "Good Morning.";
// console.log(str2.length);

// // console.log(str2.substring(5));
// console.log(str2.substring(0, 4));
// console.log(str2);

// console.log(str2.slice(0, 4));
// console.log(str2);

// // slice() : 음수값을 사용!
// console.log(str2.slice(-5, 12));

const str5 = "Hello everyone";

console.log(str5.split(" "));
console.log(str5.split(""));
