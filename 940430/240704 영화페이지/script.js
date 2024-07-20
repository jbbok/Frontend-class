// top_nav
const gnbLi = document.querySelectorAll(".topNav > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background img
const bgImgs = ["bg1.jpg"];
const bgImg = document.querySelector("#bg_img");
bgImg.style.backgroundImage = `url(./img/${bgImgs[0]})`;

// card item
const items = document.querySelectorAll("#card_items li");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
    item.style.background = "";
  });
});
const pics = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
let i = 0;
let slideInterval;
let isTransitioning = false;
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    bgImg.style.backgroundImage = `url(./img/${pics[index]})`;
  });
});
