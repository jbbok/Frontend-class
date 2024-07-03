// nav ul & li
const gnbLi = document.querySelectorAll(".topNav > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.computedStyleMap.maxHeight = lnb.scrollHeight + "px";
      lnb.computedStyleMap.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li,
    addEventListener("mouseout", () => {
      const lnb = li.querySelector(".lnb");
      const aTag = li.querySelector("a");
      if (lnb) {
        lnb.computedStyleMap.maxHeight = "0";
        lnb.computedStyleMap.opacity = "0";
        aTag.classList.remove("active");
      }
    });
});

// background image change

const bgImg = document.querySelector("#bg_img");
console.log(bgImg);
const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
bgImg.style.backgroundImage = `url(./img/${bgImgs[0]})`;

items.forEach(() => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    bgImgs.style.backgroundImage = `url(./img/${bgImgs[index]})`;
  });
});

// card items
const items = document.querySelectorAll("#card_items li");

items.forEach(() => {
  items.addEventListener("mouseover", () => {
    items.style.transform = "translateY(-20px)";
    items, (style.transition = "all 0.3s");
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});
