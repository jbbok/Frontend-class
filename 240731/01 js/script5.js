const students = ["David", "Jullien", "Peter"];

// for(초기값; 범위; 증감문) {
// 이 3가지가 다 꼭 있어야함!
// }

//기본 for문 / forEach / for ...of문
// for (let i = 0; i < students, length; i++) {
//   //(students값의 총 수, 배열이 증가할지 감소할지 모르니까 students,length 이렇게 써야함!!! )
//   console.log(students[i]);
//   //배열 안에 있는 인덱스 값을 활용해서 값을 찾아오고 싶을 때~
// }

// students.forEach((student, index, arr) => {
//   console.log(`${index + 1} 번째 학생 : ${student} in [${arr}]`);
// });

// for (student of students) {
//   console.log(student);
// }

//for ...in문
// const theBook = {
//   title: "Javascript",
//   pages: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`); //대괄호표기법 [문자 아니고 변수임! 따옴표 안 씀]
// }

// while문
let stars = Number(prompt("별의 개수 입력!"));

// while (stars > 0) {
//   // console.log("*");
//   document.write("*");
//   stars--;
// }

// do while문
do {
  document.write("*");
  stars--;
} while (stars > 0);
