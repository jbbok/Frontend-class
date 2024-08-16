const button = document.querySelector("#tweetButton");
// console.log(button);

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #maratang #sns #cat`;
  // console.log(tweetText);

  const encodedText = encodeURIComponent(tweetText);
  // encodeURIComponent: 컴터가 이해할 수 있는 언어로 바꿔주는 함수!
  // console.log(encodedText);s

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
