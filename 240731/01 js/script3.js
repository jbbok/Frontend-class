// 폼 요소(*input태그) 입력될 값은 절대 전역요소로 찾아올 수 없음!!!!!

// 이벤트라는 액션이 발생된 이후에만 value 값을 찾아올 수 있음!

// const priceValue = document.querySelector("#price").value;
// 이렇게 하면 안됨

// const priceValue = document.querySelector("#price");

// button.addEventLister("click", () => {});
// 이렇게 찾아오면 가능

const button = document.querySelector('input[type="button"]');
// console.log(button);

const showSales = () => {
  // console.log("show");
  const price = document.querySelector("#price");
  // const priceValue = price.value; //위와 같음
  const rate = document.querySelector("#rate").value;
  // console.log(price, rate);
  const savedPrice = price * (rate / 100);
  const resultPrice = price - savedPrice;

  document.querySelector(
    ".bottomInfo p"
  ).innerText = `상품의 원래 가격은 ${price}원 이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
};

button.addEventListener("click", showSales);
