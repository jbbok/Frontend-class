// const num01 = document.querySelector("#number01");
// const num02 = document.querySelector("#number02");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let randomNumber = Math.floor(Math.random());
// });

// 쌤이랑

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("추첨");
  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  // console.log(number01, number02, result);

  // 반복문 => 값을 찾아오거나 생성 => 배열에 담아야 함
  // forEach는 못 씀 이터러블한 객체가 없기 때문에!
  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    // let picked = Math.floor(Math.random() * number01.value + 1);
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));
    // for문을 (while이 false가 나올 때 까지) 종결없이 중복시키지 않고 계속 반복함

    pickedNumbers.push(picked);
    winner += `${picked}번`;
  }

  result.innerText = `당첨자 : ${winner}`;
});
