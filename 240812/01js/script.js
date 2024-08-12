window.onload = function () {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  // console.log(randomNumber); //랜덤숫자 나오는거 확인
  document.body.style.backgroundImage = `url(./img/bg-${randomNumber}.jpg`;
};

// document.body.style.backgroundImage = "url('./img/bg-2.jpg')";
//style을 꼭 넣어야 제어할 수 있음!
