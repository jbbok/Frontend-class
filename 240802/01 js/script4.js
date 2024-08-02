// // form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현!

// // 요소. value
// const button = document.querySelector("input[type='submit']");
// // 큰ㄸㅏ옴표 안에는 작은 따옴표를 써야함! 안그러면 끝난 줄 알음
// // console.log(button);

// // button.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   console.log("click");
// //   const orderName = document.querySelector("#orderName");
// // });

// // const orderName = document.querySelector("#orderName").value;
// // console.log(orderName);

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   // const orderName = document.querySelector("#orderName");
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });

// console.log(document.forms[0].elements[4]);
// // 콘솔창에서 내가 찾으려는 걸 찾아올 수 있음!

// ------------
const select = document.querySelector("#fruits");
// console.log(select.options[2].value);

select.addEventListener("change", function () {
  // console.log("change");
  // console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  // console.log(selectedText);
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다!`);
});

const checkBox = document.querySelector("input[name='alarm']:checked");
