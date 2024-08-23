// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student-2.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";

//   for(let student of students) {
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//       <li>전공 : ${student.major}</li>
//       <li>학년 : ${student.grade}</li>
//     </ul>
//     `
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     console.log(students);
//     renderHTML(students);
//   }
// };

// console.log(fetch("student-2.json"));

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach(student => { // student = 객체를 의미함
      output += `
      <h2>${student.name}</h2>
      <ul>
        <li>${student.major}</li>
        <li>${student.grade}학년</li>
      <ul>
      `;
    });
    document.querySelector("#result").innerHTML = output;
}).catch(err => console.log(err));