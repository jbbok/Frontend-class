const trigger = document.querySelector(".trigger");
// console.log("trigger");
trigger.addEventListener("click", () => {
  // console.log("click");
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  // console.log(gnb, sns);
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  trigger.classList.toggle("active");
  // this.classList.toggle("active"); 화살표함수일 때는 this가 윈도우를 지칭
});
