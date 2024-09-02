const imageAll = document.querySelectorAll(".parallaxImage");
// console.log(imageAll);
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  // console.log(scrollNum);

  if (scrollNum < 1500) {
    imageAll.forEach((item, index) => {
      // console.log(item);
      item.style.transform = `translate3d(0, 0, ${
        scrollNum / (3 * totalNum - index)
      }px)`;
    });
  }
});
