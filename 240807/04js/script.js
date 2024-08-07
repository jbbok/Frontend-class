// const container = document.querySelector(".container");
// const newP = document.createElement("p");
// // console.log(newP);
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);
// container.appendChild(newP);

// const newP02 = document.createElement("p");
// const textNode02 = document.createTextNode("React.js");

// container.appendChild(newP);

// const basisNode = document.querySelectorAll("p")[1];
// // console.log(basisNode);
// container.insertBefore(newP02, basisNode);

// const target = document.querySelectorAll("p")[0];

// target.addEventListener("click", function () {
//   this.remove();
// });

const newP = document.createElement("p");

const textNode = document.createTextNode("Typescript");

const container = document.querySelector(".container");

newP.appendChild(textNode);

const newP02 = document.createElement("p");

const textNode02 = document.createTextNode("React.js");

newP02.appendChild(textNode02);

container.appendChild(newP);

const basisNode = document.querySelectorAll("p")[0];

console.log(basisNode);

container.insertBefore(newP02, basisNode);

// const target = document.querySelectorAll("p")[0];

// target.addEventListener("click", function () {
//   this.remove();
// });

const items = document.querySelectorAll("p");
items.forEach((item) => {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
    // console.log(this);
  });
});
