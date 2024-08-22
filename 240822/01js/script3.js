// console.log("시작");
// add();
// console.log("실행 중...");
// console.log("끝");

// try {
//   // 실행시킬 코드를 넣는 공간, 명령문
//   console.log("시작");
//   add();
//   console.log("실행 중...");
//   console.log("끝");
// } catch (err) {
//   // try문을 실행시켰을 때, 어떤 에러사항이 발생될 경우 실행시킬 명령문이 들어와야 함
//   console.log(`오류발생 : ${err.message}`);
//   console.log(`오류발생 : ${err.name}`);
// }

// console.log("종료");

// ------------------------------

const json = `{"grade": 3, "age": 25}`

try {
  const user = JSON.parse(student.json);
  if (!user.skill) throw "사용자 스킬이 없습니다!";
} catch (err) {
  console.log(err);
}
