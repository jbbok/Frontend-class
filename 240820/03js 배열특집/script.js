const uwerDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const updateList = (filteredList) => {
  let listHTMl = "";
  filteredList.forEach((data) => {
    listHTMl += `<li>${data.name} : ${data.age}</li>`;
  });

  document.querySelector(".user_list").innerHTML = listHTMl;
};

const onClickButton = (e) => {
  // console.log(e.target.dataset.age);
  const targetAge = e.target.dataset.age;
  const filteredList = uwerDataList.filter((data) => data.age >= targetAge);
  // console.log(filteredList);
  updateList(filteredList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
