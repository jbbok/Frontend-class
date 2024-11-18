// 콜백함수 : 함수 안에 또 다른 함수 선언, 호출
// 함수의 호출을 다른 함수가 결정짓는다

const dispalyLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop");
        });
      }, 1000);
    }, 1000);
  }, 1000);
};

dispalyLetter();
