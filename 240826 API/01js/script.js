// 저장공간

// setItem(key, value) // 로컬스토리지라는 객체를 통해 아이템(?)을 저장함
// getItem(key) // 로컬스토리지에서 아이템을 찾아오는 것
// removeItem(key)
// clear() // 기존의 모든 원본 데이터를 리셋시킴 (사용 횟수가 현저히 적음)

let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));
// localStorage.setItem("students", students);
// JSON.stringify()를 안 쓰면 문자 그대로 받아들이고, 문자를 감싸안고 있는 배열을 못 받아들임, 값을 받아야하는 객체였다면 에러가 났을 것 -> JSON.stringify()을 써서 변형시켜서 문자 배열 (?)로 만들어줘야 함

let localData;

if (localStorage.getItem("students") === null) localData = [];
// null값이 아닌 경우에 한해서 로컬데이터라는 배열로 만들겠다
else localData = JSON.parse(localStorage.getItem("students"));
// 로컬스토리지에 있는 스튜던트s를 찾아와서 parse를 사용해 문자로 만들고 배열로 가져옴
localData.push("Choi");
// 최씨 추가

console.log(localData);
