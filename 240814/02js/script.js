// Searvh Modal

const searchBtn = document.querySelector(".fa-magnifying-glass");
// console.log(searchBtn);
// const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});

// closeBtn.addEventListener("click", () => {
//   document.querySelector("modal-search").classList.remove("active");
// });

// const items = document.querySelectorAll(".close, section");
// console.log(items);

document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

// Search Bar
const searchBar = document.querySelector(".search input[type='text']");
// console.log(searchBar);

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});

searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// Accordion Event
const firstContent = document.querySelectorAll(".accordion .content");
// console.log(firstContent[0]);
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
// console.log(titles);
titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });
    // 모든 이벤트를 회수

    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    // 선택된 애와 선택 안 된 애를 나눈다

    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});
