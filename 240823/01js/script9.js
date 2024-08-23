// https://dummyjson.com/quotes

// 미션
// json 데이터를 가져오세요!
// 화면에 출력!
// 새로고침이 될 때 마다 랜덤형식으로 출력될 수 있도록! 랜덤함수!

const quotesURL = "https://dummyjson.com/quotes";

// fetch(quotesURL)
//   .then((response) => response.json())
//   .then(data => console.log(data));

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(".author").innerHTML = data.quotes[random].author;
  })
  .catch((err) => console.log(err));