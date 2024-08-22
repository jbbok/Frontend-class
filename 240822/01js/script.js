const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json");
// get 방식으로 받고, student파일 받을거야~
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    // console.log(result);
    result.innerText = `${students.name}은 ${students.major} 학과의 ${students.grade}학년 입니다!`;
  }
};
