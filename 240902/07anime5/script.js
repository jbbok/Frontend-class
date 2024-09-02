const ul = document.querySelector("ul");
// console.log(ul);
const grid = [9, 3]; // 열이 첫번째, 행이 두번째!(anime의 법칙임)
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

anime({
  targets: "li",
  easing: "linear",
  duration: 1000,
  // scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center", axis: "z" }),
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center" }),
});
