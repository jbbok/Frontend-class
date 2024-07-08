const stBtn = document.getElementById("stbtn");
const prBtn = document.getElementById("prbtn");

console.log(stBtn, prBtn);

stBtn.addEventListener("click", (event) => {
  event.preventDefault();
  stBtn.classList.toggle("filledA");
  // femaleBtn.querySelector("i").classList.add("filledA");
  prBtn.classList.remove("filledB");
});

prBtn.addEventListener("click", (event) => {
  event.preventDefault();
  prBtn.classList.toggle("filledB");
  // maleBtn.querySelector("i").classList.add("filledB");
  stBtn.classList.remove("filledA");
});
